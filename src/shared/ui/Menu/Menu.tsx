import { FC, useEffect, useState } from 'react'
import { MenuItem } from './MenuItem'
import { MenuItemProps } from './types/MenuItemProps'

interface MenuProps {
  items: MenuItemProps[]
  isExpanded: boolean
  activeKey?: string
}

export const Menu: FC<MenuProps> = ({ activeKey, items, isExpanded }) => {
  const [currentActiveKey, setActiveKey] = useState<string>(activeKey || '')

  useEffect(() => {
    if (activeKey != null) {
      setActiveKey(activeKey)
    }
  }, [activeKey])

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <MenuItem
          key={item.itemKey}
          isExpanded={isExpanded}
          isActive={item.itemKey === currentActiveKey}
          {...item}
        />
      ))}
    </div>
  )
}
