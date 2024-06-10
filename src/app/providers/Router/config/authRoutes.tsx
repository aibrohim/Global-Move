import { Navigate, RouteObject } from 'react-router-dom'
import { Login } from '@/pages/Login'

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]
