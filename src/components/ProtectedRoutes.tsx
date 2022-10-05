import { Outlet, Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import jwt_decode from 'jwt-decode'

export default function ProtectedRoutes() {
	const { auth } = useAuth()
	const location = useLocation()

	const verifyAuth = (token: string) => {
		const decodedJWT: any = jwt_decode(token)

		if (decodedJWT.exp * 1000 < Date.now()) return false

		return true
	}

	return auth?.access_token ? (
		verifyAuth(auth.access_token) ? (
			<Outlet />
		) : (
			<Navigate to='/' state={{ from: location }} replace />
		)
	) : (
		<Navigate to='/' state={{ from: location }} replace />
	)
}
