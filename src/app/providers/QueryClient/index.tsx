import {
  QueryClientProvider,
  QueryClient as QueryClientCls,
} from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface QueryClientProps {
  children: ReactNode
}

const queryClient = new QueryClientCls()

export const QueryClient: FC<QueryClientProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
