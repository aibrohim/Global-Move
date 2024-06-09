import { FC, useState } from 'react'
import { MenuItem } from './MenuItem'
import { MenuItemProps } from './types/MenuItemProps'

interface MenuProps {
  items: MenuItemProps[]
  isExpanded: boolean
}

export const Menu: FC<MenuProps> = ({ items, isExpanded }) => {
  const [activeKey, setActiveKey] = useState<string>('')

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <MenuItem
          key={item.itemKey}
          isExpanded={isExpanded}
          isActive={item.itemKey === activeKey}
          onClick={(key) => setActiveKey(key)}
          {...item}
        />
      ))}
    </div>
  )
}
