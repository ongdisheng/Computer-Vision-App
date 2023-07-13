import NavBar from './components/NavBar'
import Hero from './components/Hero'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  })

  return (
    <Router>
      <div>
        <NavBar user={user} />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App