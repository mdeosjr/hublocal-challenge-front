import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import ButtonGroup from '../../components/ButtonGroup'
import { styles } from '../../components/GlobalStyles'
import StyledLink from '../../components/StyledLink'
import LocalsContent from './localsContent'
import CreateLocal from './localsForm'

function LocalsPage() {
	const [value, setValue] = useState('locais')

	return (
		<Box sx={styles.container}>
			<Box sx={styles.sectionContainer}>
				<Typography sx={{ ...styles.title, paddingBottom: '0' }}>
					LOCAIS
				</Typography>
				<ButtonGroup value={value} setValue={setValue} />
				{value === 'locais' && <LocalsContent />}
				{value === 'adicionar' && <CreateLocal setValue={setValue} />}
				<StyledLink to='/home'>Voltar para home</StyledLink>
			</Box>
		</Box>
	)
}

export default LocalsPage
