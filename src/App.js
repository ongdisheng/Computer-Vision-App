import NavBar from './components/NavBar'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import ObjDetect from './components/ObjDetect'
import HandDetect from './components/HandDetect'
import BodyDetect from './components/BodyDetect'
import Products from './components/Products'
import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
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
    const password = event.target.password.value
    window.localStorage.setItem('user', JSON.stringify({ username }))

    // empty username or password
    if (!username || !password) {
      addToast('Username or password cannot be empty', 'error')
      return
    }

    setUser({ username })
    addToast('Login successfully', 'success')
    navigate(-1)
  }

  // event handler for logout
  const handleLogout = () => {
    window.localStorage.removeItem('user')
    setUser(null)
    addToast('Logout successfully', 'success')
    navigate('/')
  }

  // add a toast message upon successful login
  const addToast = (message, status) => {
    toast({
      title: `${message}`,
      position: 'top',
      status: status,
      duration: 2000,
      isClosable: true,
    })
  }

  return (   
    <div>
      <NavBar user={user} handleLogout={handleLogout} />

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<LoginForm handleLogin={handleLogin} addToast={addToast} />} />
        <Route path='/obj' element={user ? <ObjDetect addToast={addToast} /> : <Navigate replace to='/login' state={{ previousPath: '/products' }} />} />
        <Route path='/hand' element={user ? <HandDetect addToast={addToast} /> : <Navigate replace to='/login' state={{ previousPath: '/products' }} />} />
        <Route path='/body' element={user ? <BodyDetect addToast={addToast} /> : <Navigate replace to='/login' state={{ previousPath: '/products' }} />} />
        <Route path='/products' element={<Products />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App