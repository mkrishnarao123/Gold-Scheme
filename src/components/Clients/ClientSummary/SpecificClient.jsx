import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Stack,
} from '@mui/material'

const SpecificClient = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const clientId = searchParams.get('id')
  const [client, setClient] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Placeholder: Load client details from API
    setClient({
      id: clientId,
      name: `Client ${clientId}`,
      email: `client${clientId}@example.com`,
      phone: '9876543210',
      address: '123 Main St, City',
    })
    setLoading(false)
  }, [clientId])

  if (loading) {
    return <Container>Loading client details...</Container>
  }

  if (!client) {
    return <Container>Client not found</Container>
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Client Details
          </Typography>

          <Stack spacing={2} sx={{ mb: 3 }}>
            <Box>
              <Typography color="textSecondary">Name</Typography>
              <Typography variant="body1">{client.name}</Typography>
            </Box>
            <Box>
              <Typography color="textSecondary">Email</Typography>
              <Typography variant="body1">{client.email}</Typography>
            </Box>
            <Box>
              <Typography color="textSecondary">Phone</Typography>
              <Typography variant="body1">{client.phone}</Typography>
            </Box>
            <Box>
              <Typography color="textSecondary">Address</Typography>
              <Typography variant="body1">{client.address}</Typography>
            </Box>
          </Stack>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/clients-summary')}
            >
              Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default SpecificClient
