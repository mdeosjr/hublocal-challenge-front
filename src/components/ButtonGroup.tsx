import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { styles } from './GlobalStyles'

function ButtonGroup({ value, setValue }: any) {
	const handleValue = (event: any, newValue: null) => {
		if (newValue !== null) {
			setValue(newValue)
		}
	}

	const path = window.location.pathname

	return (
		<ToggleButtonGroup
			sx={{ border: '1px solid black' }}
			fullWidth
			value={value}
			exclusive
			onChange={handleValue}
		>
			{path === '/empresas' ? (
				<ToggleButton value='empresas' sx={styles.toggleButtonFont}>
					EMPRESAS
				</ToggleButton>
			) : (
				<ToggleButton value='locais' sx={styles.toggleButtonFont}>
					LOCAIS
				</ToggleButton>
			)}
			<ToggleButton value='adicionar' sx={styles.toggleButtonFont}>
				ADICIONAR
			</ToggleButton>
		</ToggleButtonGroup>
	)
}

export default ButtonGroup
