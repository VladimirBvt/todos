import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../shared/api/query-client.ts'
import type { PropsWithChildren } from 'react'

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
