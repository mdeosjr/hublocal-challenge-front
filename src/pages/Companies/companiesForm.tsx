import { useState } from 'react'
import { CircularProgress, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import styled from 'styled-components'
import useAuth from '../../hooks/useAuth'
import { api } from '../../services/api'
import ResponsibleForm from '../../components/ResponsibleForm'
import { styles } from '../../components/GlobalStyles'
import { Button } from '../../components/Form'

function CreateCompany() {
	const { auth } = useAuth()
	const [data, setData] = useState({
		name: '',
		CNPJ: '',
		description: '',
		responsibles: []
	})
	const [button, setButton] = useState(true)

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	function sendData(e: React.FormEvent) {
		e.preventDefault()

		const promise = api.createCompany(auth.access_token, { ...data })

		setButton(false)

		promise
			.then((response) => {
				setButton(false)
			})
			.catch((err) => console.log(err))
	}

	return (
		<Form onSubmit={sendData}>
			<TextField
				required
				name='name'
				value={data.name}
				onChange={handleInput}
				label='Nome da empresa'
			/>
			<TextField
				required
				name='CNPJ'
				value={data.CNPJ}
				onChange={handleInput}
				label='CNPJ'
			/>
			<TextField
				required
				name='Descrição'
				value={data.description}
				onChange={handleInput}
				label='Descrição'
			/>
			<Typography sx={{...styles.toggleButtonFont, marginTop: '20px'}}>Responsáveis</Typography>
			<ResponsibleForm />
			<Button type='submit' active={button}>
				{button ? 'CADASTRAR' : <CircularProgress color='inherit' />}
			</Button>
		</Form>
	)
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`

export default CreateCompany
