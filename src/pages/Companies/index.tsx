import { Box } from '@mui/material'
import { useState } from 'react'
import ButtonGroup from '../../components/ButtonGroup'
import { styles } from '../../components/GlobalStyles'
import CompaniesContent from './companiesContent'
import CreateCompany from './companiesForm'

function CompaniesPage() {
	const [value, setValue] = useState('empresas')

	return (
		<Box sx={styles.container}>
			<Box sx={styles.sectionContainer}>
				<ButtonGroup value={value} setValue={setValue} />
				{value === 'empresas' && <CompaniesContent />}
				{value === 'adicionar' && <CreateCompany />}
			</Box>
		</Box>
	)
}

export default CompaniesPage
