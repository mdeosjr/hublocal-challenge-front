import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { SignIn, SignUp } from './pages/index'

function App() {
   return (
      <AuthProvider>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<SignIn />} />
               <Route path='/sign-up' element={<SignUp />} />
            </Routes>
         </BrowserRouter>
      </AuthProvider>
   )
}

export default App
