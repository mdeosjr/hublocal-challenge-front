import { Box } from '@mui/material'
import { ResponsibleProps } from '../pages/Companies/companiesContent'
import { styles } from './GlobalStyles'

export interface Responsible {
	id?: number
	name: string
	phone: string
	address: string
	createdAt: Date
	isMain: boolean
	localId: number
	companyId: number
}

function ResponsibleContent({ responsible }: ResponsibleProps) {
	return (
		<Box
			sx={styles.responsibleSection}
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
