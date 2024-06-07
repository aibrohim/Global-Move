import { Courses } from '@/widgets/Courses'
import { QueryClient } from '../providers/QueryClient'

export const App = () => {
  return (
    <QueryClient>
      <Courses />
    </QueryClient>
  )
}
