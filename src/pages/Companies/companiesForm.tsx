import React, { useState } from 'react'
import {
	Box,
	CircularProgress,
	Divider,
	TextField,
	Typography
} from '@mui/material'
import styled from 'styled-components'
import useAuth from '../../hooks/useAuth'
import { api } from '../../services/api'
import { styles } from '../../components/GlobalStyles'
import { Button } from '../../components/Form'
import { useForm, useFieldArray } from 'react-hook-form'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

type FormValues = {
	name: string
	CNPJ: string
	description: string
	responsibles: {
		name: string
		phone: string
		address: string
	}[]
}

interface ValueProps {
	setValue: React.Dispatch<React.SetStateAction<string>>
}

function CreateCompany({ setValue }: ValueProps) {
	const { auth } = useAuth()
	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({
		defaultValues: {
			name: '',
			CNPJ: '',
			description: '',
			responsibles: [{ name: '', phone: '', address: '' }]
		},
		mode: 'onBlur'
	})
	const { fields, append, remove } = useFieldArray({
		name: 'responsibles',
		control
	})

	const [button, setButton] = useState(true)

	async function createCompany(e: React.FormEvent) {
		e.preventDefault()

		handleSubmit(sendData)(e)
	}

	async function sendData(data: FormValues) {
		const promise = api.createCompany(auth.access_token, data)

		setButton(false)

		promise
			.then((response) => {
				setButton(false)
				setValue('empresas')
			})
			.catch((err) => {
				console.log(err)
				setButton(true)
			})
	}

	return (
		<Form onSubmit={createCompany}>
			<TextField
				fullWidth
				variant='outlined'
				className={errors?.name ? 'error' : ''}
				{...register(`name` as const, {
					required: true
				})}
				defaultValue=''
				placeholder='Nome'
				required
			/>
			<TextField
				fullWidth
				variant='outlined'
				className={errors?.CNPJ ? 'error' : ''}
				{...register(`CNPJ` as const, {
					required: true
				})}
				defaultValue=''
				placeholder='CNPJ'
				required
			/>
			<TextField
				fullWidth
				variant='outlined'
				className={errors?.description ? 'error' : ''}
				{...register(`description` as const, {
					required: true
				})}
				defaultValue=''
				placeholder='Descrição'
				required
			/>
			<Typography sx={{ ...styles.toggleButtonFont, marginTop: '20px' }}>
				Responsáveis
			</Typography>
			{fields.map((field, i) => {
				return (
					<Box sx={styles.responsibleForm} key={field.id}>
						<TextField
							fullWidth
							variant='outlined'
							className={errors?.responsibles?.[i]?.name ? 'error' : ''}
							{...register(`responsibles.${i}.name` as const, {
								required: true
							})}
							defaultValue={field.name}
							placeholder='Nome'
							required
						/>
						<TextField
							fullWidth
							variant='outlined'
							className={errors?.responsibles?.[i]?.phone ? 'error' : ''}
							{...register(`responsibles.${i}.phone` as const, {
								required: true
							})}
							defaultValue={field.phone}
							placeholder='Telefone'
							required
						/>
						<TextField
							fullWidth
							variant='outlined'
							className={
								errors?.responsibles?.[i]?.address ? 'error' : ''
							}
							{...register(`responsibles.${i}.address` as const, {
								required: true
							})}
							defaultValue={field.address}
							placeholder='Endereço'
							required
						/>
						<RemoveCircleIcon
							type='button'
							sx={{
								cursor: 'pointer',
								marginTop: '13px'
							}}
							onClick={() => remove(i)}
						/>
					</Box>
				)
			})}
			<Button
				active={button}
				type='button'
				onClick={() =>
					append({
						name: '',
						phone: '',
						address: ''
					})
				}
			>
				Adicionar Responsável
			</Button>
			<Divider style={{ marginTop: 20, marginBottom: 20 }} />
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
