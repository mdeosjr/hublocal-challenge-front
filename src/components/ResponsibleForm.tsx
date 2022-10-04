import { Box, Divider, TextField } from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { FieldArray, Form, Formik, getIn } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { Button } from './Form'

const validationSchema = Yup.object().shape({
	responsibles: Yup.array().of(
		Yup.object().shape({
			name: Yup.string().required('Nome obrigatório'),
			phone: Yup.string().required('Telefone obrigatório'),
			address: Yup.string().required('Endereço obrigatório')
		})
	)
})

function ResponsibleForm() {
	const [button, setButton] = useState(true)

	return (
		<Box className='responsibles'>
			<Formik
				initialValues={{
					responsibles: [
						{
							name: '',
							phone: '',
							address: ''
						}
					]
				}}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log('onSubmit', JSON.stringify(values, null, 2))
				}}
			>
				{({
					values,
					touched,
					errors,
					handleChange,
					handleBlur,
					isValid
				}) => (
					<Form noValidate autoComplete='off'>
						<FieldArray name='responsibles'>
							{({ push, remove }) => (
								<Box>
									{values.responsibles.map((p, index) => {
										const name = `responsibles[${index}].name`
										const touchedName = getIn(touched, name)
										const errorName = getIn(errors, name)

										const phone = `responsibles[${index}].phone`
										const touchedPhone = getIn(touched, phone)
										const errorPhone = getIn(errors, phone)

										const address = `responsibles[${index}].address`
										const touchedAddress = getIn(touched, address)
										const errorAddress = getIn(errors, address)

										return (
											<Box
												sx={{
													width: '100%',
													display: 'flex',
													gap: '20px',
													paddingBottom: '18px'
												}}
												key={p.phone}
											>
												<TextField
													fullWidth
													variant='outlined'
													label='Nome'
													name={name}
													value={p.name}
													required
													helperText={
														touchedName && errorName
															? errorName
															: ''
													}
													error={Boolean(touchedName && errorName)}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<TextField
													fullWidth
													variant='outlined'
													label='Telefone'
													name={phone}
													value={p.phone}
													required
													helperText={
														touchedPhone && errorPhone
															? errorPhone
															: ''
													}
													error={Boolean(
														touchedPhone && errorPhone
													)}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<TextField
													fullWidth
													variant='outlined'
													label='Endereço'
													name={address}
													value={p.address}
													required
													helperText={
														touchedAddress && errorAddress
															? errorAddress
															: ''
													}
													error={Boolean(
														touchedAddress && errorAddress
													)}
													onChange={handleChange}
													onBlur={handleBlur}
												/>
												<RemoveCircleIcon
													type='button'
													sx={{
														cursor: 'pointer',
														marginTop: '13px'
													}}
													onClick={() => remove(index)}
												/>
											</Box>
										)
									})}
									<Button
										active={button}
										type='button'
										onClick={() =>
											push({
												name: '',
												phone: '',
												address: ''
											})
										}
									>
										Adicionar Responsável
									</Button>
								</Box>
							)}
						</FieldArray>
						<Divider style={{ marginTop: 20, marginBottom: 20 }} />
					</Form>
				)}
			</Formik>
		</Box>
	)
}

export default ResponsibleForm
