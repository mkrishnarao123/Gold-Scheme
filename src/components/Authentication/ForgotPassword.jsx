import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AuthWrapper from './AuthWrapper'
import { useAlert } from '../../contexts/AlertContext'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const { showSuccessAlert, showErrorAlert } = useAlert()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleReset = async () => {
    if (!email) {
      showErrorAlert('Please enter your email')
      return
    }

    setLoading(true)
    try {
      // Placeholder for reset password API
      showSuccessAlert('Password reset link sent to your email')
      setTimeout(() => navigate('/'), 2000)
    } catch (error) {
      showErrorAlert('Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthWrapper>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Forgot Password
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleReset}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>

            <Button
              fullWidth
              variant="text"
              onClick={() => navigate('/')}
            >
              Back to Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </AuthWrapper>
  )
}

export default ForgotPassword
