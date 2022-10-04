import { Box } from '@mui/material'
import { useState } from 'react'
import ButtonGroup from '../../components/ButtonGroup'
import { styles } from '../../components/GlobalStyles'
import LocalsContent from './localsContent'

function LocalsPage() {
	const [value, setValue] = useState('locais')

	return (
		<Box sx={styles.container}>
			<Box sx={styles.sectionContainer}>
				<ButtonGroup value={value} setValue={setValue} />
				{value === 'locais' && <LocalsContent />}
				{value === 'adicionar' && <h1>Adicionar</h1>}
			</Box>
		</Box>
	)
}

export default LocalsPage
