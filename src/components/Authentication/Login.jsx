import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import AuthWrapper from './AuthWrapper'
import userSvc from '../../services/userSvc'
import { setSessionStItem } from '../../utils/SessionStorage'
import { useAlert } from '../../contexts/AlertContext'
import { validations } from '../../utils/validation'

const Login = () => {
  const navigate = useNavigate()
  const { showSuccessAlert, showErrorAlert } = useAlert()
  const [loginModel, setLoginModel] = useState({
    user_name: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!loginModel.user_name) {
      newErrors.user_name = 'Email is required'
    } else if (!validations.emailValidations[1](loginModel.user_name)) {
      newErrors.user_name = 'Invalid email format'
    }
    if (!loginModel.password) {
      newErrors.password = 'Password is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async () => {
    if (!validateForm()) return

    setLoading(true)
    try {
      const responseData = await userSvc.Login(loginModel)
      if (responseData.data.status_code === 200) {
        showSuccessAlert(responseData.data.message)
        setSessionStItem('AuthData', responseData.data.data)
        await getUserProfile(responseData.data.data[0].id)
      } else {
        showErrorAlert(responseData.data.message)
      }
    } catch (error) {
      console.error(error)
      showErrorAlert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const getUserProfile = async (id) => {
    try {
      const responseData = await userSvc.userProfile(id)
      if (responseData.data.status_code === 200) {
        setSessionStItem('is_auth', true)
        setSessionStItem('user_details', responseData.data.data)
        navigate('/home')
      }
    } catch (error) {
      console.error(error)
      showErrorAlert('Failed to load user profile')
    }
  }

  return (
    <AuthWrapper>
      <Card>
        <CardContent>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
              Welcome to Anand's Jewelry.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Unlock treasures within.
              <br />
              Login to your glittering journey.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your Email"
              value={loginModel.user_name}
              onChange={(e) => setLoginModel({ ...loginModel, user_name: e.target.value })}
              error={!!errors.user_name}
              helperText={errors.user_name}
              type="email"
            />

            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your Password"
              type={showPassword ? 'text' : 'password'}
              value={loginModel.password}
              onChange={(e) => setLoginModel({ ...loginModel, password: e.target.value })}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            <Button
              fullWidth
              variant="text"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password?
            </Button>
          </Box>
        </CardContent>
      </Card>
    </AuthWrapper>
  )
}

export default Login
