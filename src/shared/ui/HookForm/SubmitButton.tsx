import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { Button, ButtonProps } from '@/components/ui/button'

interface SubmitButtonProps extends ButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({ disabled, ...props }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext()

  return (
    <Button
      {...props}
      disabled={isSubmitting || disabled}
      isLoading={isSubmitting}
    />
  )
}
