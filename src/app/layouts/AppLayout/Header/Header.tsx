import { PanelLeftClose, PanelRightClose } from 'lucide-react'
import { FC } from 'react'
import { Button } from '@/shared/ui/button'
import { ProfileToggler } from './ProfileToggler'
import { ThemeToggler } from './ThemeToggler'

interface HeaderProps {
  isExpanded: boolean
  onExpandTogglerClick: () => void
}

export const Header: FC<HeaderProps> = ({
  isExpanded,
  onExpandTogglerClick,
}) => {
  return (
    <header className="p-2 flex justify-between">
      <Button
        size="icon"
        variant="outline"
        onClick={() => onExpandTogglerClick()}
      >
        {isExpanded ? <PanelLeftClose /> : <PanelRightClose />}
      </Button>
      <div className="flex gap-2">
        <ThemeToggler />
        <ProfileToggler />
      </div>
    </header>
  )
}
