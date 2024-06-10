import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export const AppLayout = () => {
  const [isExpanded, setExpanded] = useState<boolean>(false)
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isExpanded={isExpanded} />
      <div className="border-l-2 border-solid border-gray-200 grow flex flex-col">
        <Header
          isExpanded={isExpanded}
          onExpandTogglerClick={() => setExpanded(!isExpanded)}
        />
        <div className="grow border-t-2 border-solid border-gray-200 overflow-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
