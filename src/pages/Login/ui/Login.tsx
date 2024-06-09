import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/ui/card'

import { Field } from '@/shared/ui/HookForm/Field'
import { SubmitButton } from '@/shared/ui/HookForm/SubmitButton'

import { useLogin } from '../api/loginApi'
import { TFormState, validationSchema } from '../lib/validationSchema'
import { useUser } from '@/app/providers/User'
import { Alert } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'

export const Login: FC = () => {
  const { logIn } = useUser()
  const { mutateAsync: login, error } = useLogin()

  const navigate = useNavigate()

  const { toast } = useToast()

  const form = useForm<TFormState>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(validationSchema),
  })

  const handleFormSubmit = (values: TFormState) =>
    login(values)
      .then(({ data: token }) => {
        toast({
          title: 'Muvaffaqiyat!',
          description: 'UzChess platformasiga xush kelibsiz!',
        })
        logIn(token)
        navigate('/')
      })
      .catch(() => {})

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[400px]">
        <h1 className="font-bold text-2xl mb-5">
          Welcome to UzChess Dashboard
        </h1>
        {error && (
          <Alert className="mb-4">
            {error.response?.data.message ||
              'Error occured while logging in. Please try again'}
          </Alert>
        )}
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <Field
              name="email"
              label="Email"
              inputProps={{ placeholder: 'Email' }}
            />
            <Field
              name="password"
              label="Password"
              inputProps={{ placeholder: 'Password' }}
            />
            <SubmitButton type="submit" className="block w-full">
              Login
            </SubmitButton>
          </form>
        </FormProvider>
      </Card>
    </div>
  )
}