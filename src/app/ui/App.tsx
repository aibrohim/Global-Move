import { Toaster } from '@/components/ui/toaster'
import { QueryClient } from '../providers/QueryClient'
import { AppRouter } from '../providers/Router'
import { UserProvider } from '../providers/User'

export const App = () => {
  return (
    <QueryClient>
      <UserProvider>
        <AppRouter />
      </UserProvider>
      <Toaster />
    </QueryClient>
  )
}
