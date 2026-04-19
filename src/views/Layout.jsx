import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, AppBar, Toolbar, Container, Footer, Typography } from '@mui/material'
import Navbar from '../components/Layout/Navbar'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Outlet />
      </Box>
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 4,
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          {new Date().getFullYear()} — <strong>Gold Scheme</strong>
        </Typography>
      </Box>
    </Box>
  )
}

export default Layout
