import type { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../shared/api/query-client.ts'
import { RouterProviderComponent } from './router-provider.tsx'

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <RouterProviderComponent />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}
