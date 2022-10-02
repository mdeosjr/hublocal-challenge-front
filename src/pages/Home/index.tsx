import { Box, Stack, Typography } from '@mui/material'
import { styles } from '../../components/GlobalStyles'
import { HomePageButton } from '../../components/StyledHomeButtons'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function HomePage() {
	let navigate = useNavigate()
	const { auth } = useAuth()

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
					Bem-vindo, {auth.name}
				</Typography>
				<Stack sx={{ width: '100%' }} spacing={2} direction='column'>
					<HomePageButton onClick={() => navigate('/empresas')}>
						Empresas
					</HomePageButton>
					<HomePageButton onClick={() => navigate('/locais')}>
						Locais
					</HomePageButton>
					<HomePageButton onClick={() => navigate('/tickets')}>
						Tickets
					</HomePageButton>
				</Stack>
			</Box>
		</Box>
	)
}
