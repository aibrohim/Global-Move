import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu } from '@/shared/ui/Menu'

import { items } from './config/menuItems'

const EXPANDED_WIDTH = 300
const COLLAPSED_WIDTH = 64

interface SidebarProps {
  isExpanded: boolean
}

export const Sidebar: FC<SidebarProps> = ({ isExpanded }) => {
  const { pathname } = useLocation()
  return (
    <div
      className="p-2"
      style={{ width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
    >
      <Menu
        isExpanded={isExpanded}
        items={items}
        activeKey={pathname.replace('/', '')}
      />
    </div>
  )
}
