import { Navigate, RouteObject } from 'react-router-dom'
import { CoursesList } from '@/pages/CoursesList'
import { AppLayout } from '../../../layouts/AppLayout'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: 'main',
      },
      {
        path: '/courses',
        element: <CoursesList />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]
