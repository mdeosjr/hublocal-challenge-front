import { ToggleButtonGroup, ToggleButton } from '@mui/material'

function ButtonGroup({ value, setValue }: any) {
	const handleValue = (event: any, newValue: null) => {
		if (newValue !== null) {
			setValue(newValue)
		}
	}

	return (
		<ToggleButtonGroup
			sx={{
				width: '300px'
			}}
			color='primary'
			fullWidth
			value={value}
			exclusive
			onChange={handleValue}
		>
			<ToggleButton value='empresas'>EMPRESAS</ToggleButton>
			<ToggleButton value='adicionar'>ADICIONAR</ToggleButton>
		</ToggleButtonGroup>
	)
}

export default ButtonGroup
