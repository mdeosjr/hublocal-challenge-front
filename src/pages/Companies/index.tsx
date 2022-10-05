import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import ButtonGroup from '../../components/ButtonGroup'
import { styles } from '../../components/GlobalStyles'
import StyledLink from '../../components/StyledLink'
import CompaniesContent from './companiesContent'
import CreateCompany from './companiesForm'

function CompaniesPage() {
	const [value, setValue] = useState('empresas')

	return (
		<Box sx={styles.container}>
			<Box sx={styles.sectionContainer}>
				<Typography sx={{ ...styles.title, paddingBottom: '0' }}>
					EMPRESAS
				</Typography>
				<ButtonGroup value={value} setValue={setValue} />
				{value === 'empresas' && <CompaniesContent />}
				{value === 'adicionar' && <CreateCompany setValue={setValue} />}
				<StyledLink to='/home'>Voltar para home</StyledLink>
			</Box>
		</Box>
	)
}

export default CompaniesPage
