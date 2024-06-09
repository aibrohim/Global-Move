import { FC, InputHTMLAttributes } from 'react'

import { useController } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface InputProps {
  name: string
  label: string
  className?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const Field: FC<InputProps> = ({
  name,
  label,
  className,
  inputProps = {},
}) => {
  const { field, fieldState } = useController({
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
      <Input {...inputProps} {...field} />
      {fieldState.error && (
        <p className="text-red-500 mt-4">{fieldState.error.message}</p>
      )}
    </label>
  )
}
