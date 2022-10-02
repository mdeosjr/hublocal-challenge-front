import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Buttons, Button } from '../../components/Form'
import StyledLink from '../../components/StyledLink'
import { Box, Typography, CircularProgress } from '@mui/material'
import { styles } from '../../components/GlobalStyles'
import { api } from '../../services/api'
import { AxiosError } from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface UserData {
   name: string
   email: string
   password: string
}

function SignUp() {
   const [userData, setUserData] = useState<UserData>({
      name: '',
      email: '',
      password: ''
   })
   const [input, setInput] = useState(true)
   const [button, setButton] = useState(true)
   let navigate = useNavigate()

   async function register(e: React.FormEvent) {
      e.preventDefault()

      try {
         setButton(false)
         setInput(false)
         await api.createUser({ ...userData })
         toast.success('User created!', {
            position: 'top-right',
            autoClose: 1800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark'
         })
         navigate('/')
      } catch (e: Error | AxiosError | any) {
         registerError(e)
      }
   }

   function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
      setUserData({ ...userData, [e.target.name]: e.target.value })
   }

   function registerError(e: Error | AxiosError | any) {
      toast.warn(`${e.response.data.message}`, {
         position: 'top-right',
         autoClose: 1800,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: false,
         progress: undefined,
         theme: 'dark'
      })
      setButton(true)
      setInput(true)
   }

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
               Crie sua conta
            </Typography>
            <Form onSubmit={register}>
               <Input
                  required
                  active={input}
                  type='name'
                  placeholder='nome'
                  name='name'
                  onChange={handleInput}
                  value={userData.name}
               />
               <Input
                  required
                  active={input}
                  type='email'
                  placeholder='email'
                  name='email'
                  onChange={handleInput}
                  value={userData.email}
               />
               <Input
                  required
                  active={input}
                  type='password'
                  placeholder='senha'
                  name='password'
                  onChange={handleInput}
                  value={userData.password}
               />
               <Buttons>
                  <Button type='submit' active={button}>
                     {button ? (
                        'CADASTRAR'
                     ) : (
                        <CircularProgress color='inherit' />
                     )}
                  </Button>
               </Buttons>
               <StyledLink to='/'>Tem uma conta? Faça login</StyledLink>
            </Form>
         </Box>
         <ToastContainer />
      </Box>
   )
}

export default SignUp
