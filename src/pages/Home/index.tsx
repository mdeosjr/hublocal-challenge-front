import { Box, Stack, Typography } from '@mui/material'
import { styles } from '../../components/GlobalStyles'
import { HomePageButton } from '../../components/StyledHomeButtons'

export default function HomePage() {
	return (
		<Box sx={styles.container}>
			<Box
				sx={{
					width: '30vw',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Typography sx={styles.title} variant='h4' component='h1'>
					Bem-vindo, Nome
				</Typography>
				<Stack sx={{ width: '100%' }} spacing={2} direction='column'>
					<HomePageButton>Empresas</HomePageButton>
					<HomePageButton>Locais</HomePageButton>
					<HomePageButton>Tickets</HomePageButton>
				</Stack>
			</Box>
		</Box>
	)
}
