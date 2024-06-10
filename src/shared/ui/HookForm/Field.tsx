import { FC, ReactNode } from 'react'

import { useController } from 'react-hook-form'
import { cn } from '@/lib/utils'

interface InputProps {
  name: string
  label: string
  className?: string
  children: ReactNode
}

export const Field: FC<InputProps> = ({ name, label, className, children }) => {
  const { fieldState } = useController({
    name,
  })

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      className={cn(
        'block mb-4',
        { 'text-red-500': !!fieldState.error },
        className
      )}
    >
      <span className="block font-semibold mb-2">{label}</span>
      {children}
      {fieldState.error && (
        <p className="text-red-500 mt-4">{fieldState.error.message}</p>
      )}
    </label>
  )
}
