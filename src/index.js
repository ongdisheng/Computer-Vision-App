import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = extendTheme({
  colors: {
    white: '#FAFAFA', 
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Router>
)