import { Box } from '@mui/material'
import { useState } from 'react'
import ButtonGroup from '../../components/ButtonGroup'
import { styles } from '../../components/GlobalStyles'
import CompaniesContent from './companiesContent'

function CompaniesPage() {
	const [value, setValue] = useState('empresas')
    console.log(value)

	return (
		<Box sx={styles.container}>
			<ButtonGroup value={value} setValue={setValue}></ButtonGroup>
			{value === 'empresas' && <CompaniesContent/>}
			{value === 'adicionar' && <h1>Adicionar</h1>}
		</Box>
	)
}

export default CompaniesPage
