import React, { useState, useEffect } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ClientsView = () => {
  const navigate = useNavigate()
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Placeholder: Load clients from API
    setClients([
      {
        id: 1,
        name: 'Client 1',
        email: 'client1@example.com',
        phone: '9876543210',
      },
      {
        id: 2,
        name: 'Client 2',
        email: 'client2@example.com',
        phone: '9876543211',
      },
    ])
    setLoading(false)
  }, [])

  const handleViewDetails = (clientId) => {
    navigate(`/client-details?id=${clientId}`)
  }

  if (loading) {
    return <Container>Loading clients...</Container>
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Button variant="contained" color="primary">
          Add New Client
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#d4af37' }}>
            <TableRow>
              <TableCell head>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewDetails(client.id)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ClientsView
