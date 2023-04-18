import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { Theme } from './ui/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
)
