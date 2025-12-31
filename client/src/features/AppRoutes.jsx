import { Routes, Route  ,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import About from '../pages/About'
import Setting from '../pages/Setting'
import ProtectedRoute from './ProtectedRoute.jsx'
import { useContext } from 'react'
import{ AuthContext }from './AuthProvider.jsx'


const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
        
        <Route path='/login' element={isAuthenticated ? <Navigate to={'/'}/> : <Login />} />
        <Route path='/register' element={isAuthenticated ?  <Navigate to={'/'}/>: <Register />} />
        
        <Route path='/' element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          } />

        <Route path='/about' element={
          <ProtectedRoute>
          <About />

          </ProtectedRoute>
          } />
        <Route path='/setting' element={
          <ProtectedRoute>
          <Setting />

          </ProtectedRoute>
          } />


    </Routes>
  )
}

export default AppRoutes
