import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { isSessionStItem } from '../utils/SessionStorage'

const LLogin = lazy(() => import('../components/Authentication/Login'))
const ForgotPassword = lazy(() => import('../components/Authentication/ForgotPassword'))
const Layout = lazy(() => import('../views/Layout'))
const ClientsView = lazy(() => import('../components/Clients/ClientSummary/ClientsView'))
const SpecificClient = lazy(() => import('../components/Clients/ClientSummary/SpecificClient'))

const ProtectedRoute = ({ element }) => {
  const isAuth = isSessionStItem('is_auth')
  return isAuth ? element : <Navigate to="/" replace />
}

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/home"
            element={<ProtectedRoute element={<Layout />} />}
          >
            <Route index element={<Navigate to="/clients-summary" replace />} />
            <Route path="clients-summary" element={<ClientsView />} />
            <Route path="client-details" element={<SpecificClient />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
