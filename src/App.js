import NavBar from './components/NavBar'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  })

  // event handler for login form
  const handleLogin = event => {
    event.preventDefault()
    const username = event.target.username.value
    window.localStorage.setItem('user', JSON.stringify({ username }))
    setUser({ username })
  }

  // event handler for logout

  return (
    <Router>
      <div>
        <NavBar user={user} />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<LoginForm handleLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App