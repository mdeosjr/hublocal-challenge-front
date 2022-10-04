import { useState, useEffect } from 'react'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { api } from '../../services/api'
import useAuth from '../../hooks/useAuth'
import ResponsibleContent from '../../components/ResponsibleContent'

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

export interface ResponsibleProps {
	responsible: Responsible
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
		<Box sx={{ width: '100%' }}>
			{companiesContent.map((company) => (
				<Accordion key={company.id}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<p>
							<strong>{company.name}</strong>
						</p>
					</AccordionSummary>
					<AccordionDetails>
						<p>CNPJ: {company.CNPJ}</p>
						<p>Descrição: {company.description}</p>
						<Box sx={{paddingTop: '18px'}}>
							<p>Responsáveis</p>
							{company.responsibles.map((responsible: Responsible) => (
								<ResponsibleContent responsible={responsible} />
							))}
						</Box>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	)
}

export default CompaniesContent
