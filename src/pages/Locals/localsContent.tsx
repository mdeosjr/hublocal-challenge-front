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
import ResponsibleContent, {
	Responsible
} from '../../components/ResponsibleContent'

export interface Local {
	id?: number
	name: string
	address: string
	companyId: number
	createdAt?: Date
	responsibles: any
}

export interface ResponsibleProps {
	responsible: Responsible
}

function LocalsContent() {
	const [localsContent, setLocalsContent] = useState<Local[] | []>([])
	const { auth } = useAuth()

	useEffect(() => {
		const promise = api.fetchLocals(auth.access_token)
		promise.then((response) => {
			console.log(response.data)
			setLocalsContent(response.data)
		})
	}, [auth, setLocalsContent])

	return (
		<Box sx={{ width: '100%' }}>
			{localsContent.length === 0 ? (
				<h4>Sem locais cadastrados!</h4>
			) : (
				localsContent.map((local) => (
					<Accordion key={local.id}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<p>
								<strong>{local.name}</strong>
							</p>
						</AccordionSummary>
						<AccordionDetails>
							<p>Endereço: {local.address}</p>
							<Box sx={{ paddingTop: '18px' }}>
								<p>Responsáveis</p>
								{local.responsibles.map((responsible: Responsible) => (
									<ResponsibleContent responsible={responsible} />
								))}
							</Box>
						</AccordionDetails>
					</Accordion>
				))
			)}
		</Box>
	)
}

export default LocalsContent
