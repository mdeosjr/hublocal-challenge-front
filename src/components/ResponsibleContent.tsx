import { Box } from '@mui/material'
import { ResponsibleProps } from '../pages/Companies/companiesContent'

function ResponsibleContent({ responsible }: ResponsibleProps) {
	return (
		<Box
			sx={{
				border: '1px solid black',
				borderRadius: '5px',
				padding: '4px',
				marginY: '4px'
			}}
		>
			<p>
				Nome: {responsible.name}
				{responsible.isMain === true && ' (Principal)'}
			</p>
			<p>Endereço: {responsible.address}</p>
			<p>Telefone: {responsible.phone}</p>
		</Box>
	)
}

export default ResponsibleContent
