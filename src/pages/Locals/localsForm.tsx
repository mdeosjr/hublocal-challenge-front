import React, { useEffect, useState } from 'react'
import {
	Box,
	CircularProgress,
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
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
import { Company } from '../Companies/companiesContent'

type FormValues = {
	name: string
	address: string
	companyId: number
	responsibles: {
		name: string
		phone: string
		address: string
	}[]
}

interface ValueProps {
	setValue: React.Dispatch<React.SetStateAction<string>>
}

function CreateLocal({ setValue }: ValueProps) {
	const [companies, setCompanies] = useState<Company[] | []>([])
	const { auth } = useAuth()

	useEffect(() => {
		try {
			api.fetchCompanies(auth.access_token).then((res) =>
				setCompanies(res.data)
			)
		} catch (e) {
			console.error(e)
		}
	}, [])

	const {
		register,
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({
		defaultValues: {
			name: '',
			address: '',
			companyId: undefined,
			responsibles: [{ name: '', phone: '', address: '' }]
		},
		mode: 'onBlur'
	})
	const { fields, append, remove } = useFieldArray({
		name: 'responsibles',
		control
	})

	const [button, setButton] = useState(true)

	async function createLocal(e: React.FormEvent) {
		e.preventDefault()

		handleSubmit(sendData)(e)
	}

	async function sendData(data: FormValues) {
		const promise = api.createLocal(auth.access_token, data)

		setButton(false)

		promise
			.then((response) => {
				setButton(false)
				setValue('locais')
			})
			.catch((err) => {
				console.log(err)
				setButton(true)
			})
	}

	return (
		<Form onSubmit={createLocal}>
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
				className={errors?.address ? 'error' : ''}
				{...register(`address` as const, {
					required: true
				})}
				defaultValue=''
				placeholder='Endereço'
				required
			/>
			<FormControl>
				<InputLabel id='label'>Empresa</InputLabel>
				<Select
					fullWidth
					labelId='label'
					label='Empresa'
					variant='outlined'
					className={errors?.companyId ? 'error' : ''}
					{...register(`companyId` as const, {
						required: true
					})}
					defaultValue=''
					required
				>
					{companies.map((company) => (
						<MenuItem key={company.id} value={company.id}>
							{company.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
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

export default CreateLocal
