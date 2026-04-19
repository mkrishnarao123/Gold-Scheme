import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { AlertProvider, useAlert } from './contexts/AlertContext'
import AppRoutes from './routes/AppRoutes'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#d4af37', // Gold color
    },
    secondary: {
      main: '#f57c00',
    },
  },
})

const AlertSnackbar = () => {
  const { alert, closeAlert } = useAlert()

  return (
    <Snackbar
      open={alert.show}
      autoHideDuration={4000}
      onClose={closeAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={closeAlert}
        severity={alert.color}
        sx={{ width: '100%' }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  )
}

const AppContent = () => {
  return (
    <>
      <AppRoutes />
      <AlertSnackbar />
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertProvider>
        <AppContent />
      </AlertProvider>
    </ThemeProvider>
  )
}

export default App
