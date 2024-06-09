import { FC, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useUser } from '../User'
import { appRoutes } from './config/appRoutes'
import { authRoutes } from './config/authRoutes'

export const AppRouter: FC = () => {
  const { isSignedIn } = useUser()

  const router = createBrowserRouter(isSignedIn ? appRoutes : authRoutes)

  useEffect(() => {
    if (isSignedIn) {
      router.navigate('/')
    } else {
      router.navigate('/login')
    }
  }, [isSignedIn, router])

  return <RouterProvider router={router} />
}
