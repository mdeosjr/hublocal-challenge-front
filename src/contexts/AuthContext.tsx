import { createContext, useState } from 'react'
import { UserData } from '../pages/SignIn'

interface AuthContextInterface {
	auth: UserData
	reloadHome: boolean | null
	setReloadHome: React.Dispatch<React.SetStateAction<boolean | null>>
	signIn: (userData: { name: string; access_token: string }) => void
	signOut: () => void
}

const AuthContext = createContext<AuthContextInterface | null>(null)

interface Props {
   children: React.ReactNode
}

const persistedAuth = localStorage.getItem('AUTH')
const data = JSON.parse(persistedAuth!)

export function AuthProvider({ children }: Props) {
   const [auth, setAuth] = useState(data)
   const [reloadHome, setReloadHome] = useState<boolean | null>(false)

   function signIn(userData: UserData) {
		setAuth(userData)
		localStorage.setItem('AUTH', JSON.stringify(userData))
	}

   function signOut() {
      setAuth(null)
      localStorage.removeItem('AUTH')
   }

   return (
      <AuthContext.Provider
         value={{
            auth,
            signIn,
            signOut,
            reloadHome,
            setReloadHome
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContext
