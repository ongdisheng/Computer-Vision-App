import NavBar from './components/NavBar'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import Canvas from './components/Canvas'
import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  useNavigate,
  Navigate
} from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

const App = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  // event handler for login form
  const handleLogin = event => {
    event.preventDefault()
    const username = event.target.username.value
    window.localStorage.setItem('user', JSON.stringify({ username }))
    setUser({ username })
    addToast('Login')
    navigate('/')
  }

  // event handler for logout
  const handleLogout = () => {
    window.localStorage.removeItem('user')
    setUser(null)
    addToast('Logout')
    navigate('/')
  }

  // add a toast message upon successful login
  const addToast = (message) => {
    toast({
      title: `${message} Successfully`,
      position: 'top',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (   
    <div>
      <NavBar user={user} handleLogout={handleLogout} />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<LoginForm handleLogin={handleLogin} />} />
        <Route path='/canvas' element={user ? <Canvas /> : <Navigate replace to='/login' />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App