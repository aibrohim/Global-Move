import { FC } from 'react'

import { useController } from 'react-hook-form'
import { PasswordInput as SharedPasswordInput } from '@/shared/ui/PasswordInput'

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}
export const PasswordInput: FC<PasswordInputProps> = ({ name, ...props }) => {
  const { field } = useController({ name })

  return <SharedPasswordInput {...props} {...field} />
}
