import React, { createContext, useState, useCallback } from 'react'

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    color: 'success',
    message: '',
  })

  const showSuccessAlert = useCallback((message) => {
    setAlert({
      show: true,
      color: 'success',
      message,
    })
    setTimeout(() => setAlert(prev => ({ ...prev, show: false })), 4000)
  }, [])

  const showErrorAlert = useCallback((message) => {
    setAlert({
      show: true,
      color: 'error',
      message,
    })
    setTimeout(() => setAlert(prev => ({ ...prev, show: false })), 4000)
  }, [])

  const closeAlert = useCallback(() => {
    setAlert(prev => ({ ...prev, show: false }))
  }, [])

  const value = {
    alert,
    showSuccessAlert,
    showErrorAlert,
    closeAlert,
    setAlert,
  }

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  const context = React.useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within AlertProvider')
  }
  return context
}
