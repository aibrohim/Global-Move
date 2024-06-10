import { FC } from 'react'

import { useController } from 'react-hook-form'
import { Input as SharedInput } from '@/components/ui/input'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}
export const Input: FC<InputProps> = ({ name, ...props }) => {
  const { field } = useController({ name })

  return <SharedInput {...props} {...field} />
}
