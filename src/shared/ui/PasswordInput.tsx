import { FC, forwardRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Input } from '@/shared/ui/input'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export const PasswordInput: FC = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const [type, setType] = useState<'password' | 'text'>('password')
    return (
      <div className="relative">
        <Input {...props} type={type} ref={ref} />

        <button
          type="button"
          aria-label="toggle"
          className="absolute top-1/2 right-3 -translate-y-1/2"
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
        >
          {type === 'password' ? (
            <Eye width={16} height={16} />
          ) : (
            <EyeOff width={16} height={16} />
          )}
        </button>
      </div>
    )
  }
)
