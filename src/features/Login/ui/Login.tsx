import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/ui/card'

import { Field } from '@/shared/ui/HookForm/Field'
import { SubmitButton } from '@/shared/ui/HookForm/SubmitButton'

import { useUser } from '@/app/providers/User'
import { Alert } from '@/components/ui/alert'
import { useToast } from '@/components/ui/use-toast'
import { useLogin } from '../api/loginApi'
import { TFormState, validationSchema } from '../lib/validationSchema'
import { PasswordInput } from '@/shared/ui/HookForm/PasswordInput'
import { Input } from '@/shared/ui/HookForm/Input'

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
    <Card className="w-[400px]">
      <h1 className="font-bold text-2xl mb-5">Welcome to UzChess Dashboard</h1>
      {error && (
        <Alert className="mb-4">
          {error.response?.data.message ||
            'Error occured while logging in. Please try again'}
        </Alert>
      )}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <Field name="email" label="Email">
            <Input name="email" placeholder="someone@uzchess.uz" />
          </Field>
          <Field name="password" label="Password">
            <PasswordInput name="password" placeholder="SomeOne123" />
          </Field>
          <SubmitButton type="submit" className="block w-full">
            Login
          </SubmitButton>
        </form>
      </FormProvider>
    </Card>
  )
}
