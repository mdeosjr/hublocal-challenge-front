import { Box } from '@mui/material'
import { useState } from 'react'
import ButtonGroup from '../../components/ButtonGroup'
import { styles } from '../../components/GlobalStyles'
import CompaniesContent from './companiesContent'

function CompaniesPage() {
	const [value, setValue] = useState('empresas')

	return (
		<Box sx={styles.container}>
			<Box
				sx={styles.sectionContainer}
			>
				<ButtonGroup value={value} setValue={setValue} />
				{value === 'empresas' && <CompaniesContent />}
				{value === 'adicionar' && <h1>Adicionar</h1>}
			</Box>
		</Box>
	)
}

export default CompaniesPage
