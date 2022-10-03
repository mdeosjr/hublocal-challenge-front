import { useState, useEffect } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { api } from '../../services/api'
import useAuth from '../../hooks/useAuth'

interface Company {
	id: number
	name: string
	CNPJ: string
	description: string
	userId: number
	createdAt: Date
	responsibles: any
}

interface Responsible {
	id?: number
	name: string
	phone: string
	address: string
	createdAt: Date
	isMain: boolean
	localId: number
	companyId: number
}

function CompaniesContent() {
	const [companiesContent, setCompaniesContent] = useState<Company[] | []>([])
	const { auth } = useAuth()

	useEffect(() => {
		const promise = api.fetchCompanies(auth.access_token)
		promise.then((response) => {
			setCompaniesContent(response.data)
		})
	}, [auth, setCompaniesContent])

	return (
		<>
			{companiesContent.map((company) => (
				<Accordion key={company.id}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						{company.name}
					</AccordionSummary>
					<AccordionDetails>
						{company.responsibles.map((responsible: Responsible) => (
							<>
								<p>{responsible.name}</p>
								<p>{responsible.address}</p>
							</>
						))}
					</AccordionDetails>
				</Accordion>
			))}
		</>
	)
}

export default CompaniesContent
