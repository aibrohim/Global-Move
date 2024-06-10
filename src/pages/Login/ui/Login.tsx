import { FC } from 'react'

import { Login as LoginForm } from '@/features/Login'

export const Login: FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <LoginForm />
    </div>
  )
}
