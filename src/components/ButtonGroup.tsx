import { ToggleButtonGroup, ToggleButton } from '@mui/material'

function ButtonGroup({ value, setValue }: any) {
	const handleValue = (event: any, newValue: null) => {
		if (newValue !== null) {
			setValue(newValue)
		}
	}

	return (
		<ToggleButtonGroup
			sx={{ border: '1px solid black' }}
			fullWidth
			value={value}
			exclusive
			onChange={handleValue}
		>
			<ToggleButton value='empresas' sx={{ font: 'bold 15px Barlow' }}>
				EMPRESAS
			</ToggleButton>
			<ToggleButton value='adicionar' sx={{ font: 'bold 15px Barlow' }}>
				ADICIONAR
			</ToggleButton>
		</ToggleButtonGroup>
	)
}

export default ButtonGroup
	