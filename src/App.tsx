import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import {
	SignIn,
	SignUp,
	HomePage,
	CompaniesPage,
	LocalsPage
} from './pages/index'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route element={<ProtectedRoutes />}>
						<Route path='/home' element={<HomePage />} />
						<Route path='/empresas' element={<CompaniesPage />} />
						<Route path='/locais' element={<LocalsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
