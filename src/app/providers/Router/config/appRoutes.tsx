import { RouteObject } from 'react-router-dom'
import { Courses } from '@/widgets/Courses'
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
        element: <Courses />,
      },
    ],
  },
]
