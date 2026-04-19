import React from 'react'
import { Box, Container } from '@mui/material'

const AuthWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #d4af37 0%, #f57c00 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ background: 'white', borderRadius: 2, p: 4, boxShadow: 3 }}>
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default AuthWrapper
