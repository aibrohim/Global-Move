import { PanelLeftClose } from 'lucide-react'
import { FC } from 'react'
import { Button } from '@/shared/ui/button'
import { ProfileToggler } from './ProfileToggler'
import { ThemeToggler } from './ThemeToggler'

interface HeaderProps {
  onExpandTogglerClick: () => void
}

export const Header: FC<HeaderProps> = ({ onExpandTogglerClick }) => {
  return (
    <header className="p-2 flex justify-between">
      <Button
        size="icon"
        variant="outline"
        onClick={() => onExpandTogglerClick()}
      >
        <PanelLeftClose />
      </Button>
      <div className="flex gap-2">
        <ThemeToggler />
        <ProfileToggler />
      </div>
    </header>
  )
}
