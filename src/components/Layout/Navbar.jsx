import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Typography,
  Box,
} from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { getSessionStItem, removeSessionStItem } from '../../utils/SessionStorage'

const Navbar = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)
  const userDetails = getSessionStItem('user_details')

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    removeSessionStItem('is_auth')
    removeSessionStItem('AuthData')
    removeSessionStItem('user_details')
    navigate('/')
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#d4af37' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Gold Scheme
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => navigate('/clients-summary')}>
            Clients
          </Button>

          <Button
            color="inherit"
            startIcon={<AccountCircle />}
            onClick={handleMenuClick}
          >
            {userDetails?.user_name || 'Profile'}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem disabled>
              {userDetails?.user_name}
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
