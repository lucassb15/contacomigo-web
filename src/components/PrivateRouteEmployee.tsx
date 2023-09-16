import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../contexts/AuthContext'
import { AccessDenied } from '../views/acessDenied'
import { Roles } from '../@types/Roles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PrivateRouteEmployee({ children }: any) {
  const { isAuthenticated, user, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Carregando...
      </div>
    )
  }
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  if (isAuthenticated && user?.role !== Roles.Employee) {
    return <AccessDenied />
  }

  return children
}
