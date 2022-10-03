import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { SignIn, SignUp, HomePage, CompaniesPage } from './pages/index'

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/empresas' element={<CompaniesPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
