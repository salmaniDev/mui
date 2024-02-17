import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import RTL from './components/RTL.jsx'
import theme from './lib/theme.js'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <RTL>
      <CssBaseline>
        <App />
      </CssBaseline>
    </RTL>
  </ThemeProvider>
)
