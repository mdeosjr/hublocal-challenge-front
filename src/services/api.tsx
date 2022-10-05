import axios from 'axios'
import { Company } from '../pages/Companies/companiesContent'
import { Local } from '../pages/Locals/localsContent'
import { LoginData } from '../pages/SignIn'
import { UserData } from '../pages/SignUp'

//const BASE_URL = 'http://localhost:5000'
const BASE_URL = 'https://hublocal.onrender.com'

function createConfig(token: string | null) {
   return {
      headers: {
         Authorization: `Bearer ${token}`
      }
   }
}

async function createUser(user: UserData) {
   return axios.post(`${BASE_URL}/users`, user)
}

async function login(data: LoginData) {
   return axios.post(`${BASE_URL}/auth`, data)
}

async function validateToken(token: string) {
   const config = createConfig(token)
   return axios.post(`${BASE_URL}/validate-token`, {}, config)
}

async function fetchCompanies(token: string) {
   const config = createConfig(token)
	return axios.get(`${BASE_URL}/companies`, config)
}

async function createCompany(token: string, company: Company) {
	const config = createConfig(token)
	return axios.post(`${BASE_URL}/companies`, company, config)
}

async function fetchLocals(token: string) {
	const config = createConfig(token)
	return axios.get(`${BASE_URL}/locals`, config)
}

async function createLocal(token: string, local: Local) {
	const config = createConfig(token)
	return axios.post(`${BASE_URL}/locals`, local, config)
}

export const api = {
   createUser,
   login,
   validateToken,
   fetchCompanies,
   createCompany,
   fetchLocals,
   createLocal
}
