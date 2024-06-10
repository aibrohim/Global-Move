import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import { MenuItemProps as BaseMenuItemProps } from './types/MenuItemProps'

interface MenuItemProps extends BaseMenuItemProps {
  isActive: boolean
  isExpanded: boolean
  onClick?: (key: string) => void
}

export const MenuItem: FC<MenuItemProps> = ({
  itemKey,
  isExpanded,
  isActive,
  label,
  icon,
  onClick,
}) => {
  return (
    <Button
      onClick={() => onClick?.(itemKey)}
      size="default"
      variant={isActive ? 'secondary' : 'ghost'}
      className="justify-start"
      asChild
    >
      <Link to={`/${itemKey}`}>
        {isActive && ''}
        <span className="flex gap-3 items-center">
          {icon}
          {isExpanded && label}
        </span>
      </Link>
    </Button>
  )
}
