import { CircleUser, LogOut, User } from 'lucide-react'
import { FC } from 'react'
import { Button } from '@/shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { useUser } from '@/app/providers/User'

export const ProfileToggler: FC = () => {
  const { logOut } = useUser()

  const handleLogoutClick = () => logOut()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size="icon" variant="outline">
          <CircleUser />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2">
          <User width={16} height={16} />
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" onClick={handleLogoutClick}>
          <LogOut width={16} height={16} />
          Chiqish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
