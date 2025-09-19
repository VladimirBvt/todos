import { Provider } from './providers/provider.tsx'
import type { PropsWithChildren } from 'react'

export function App({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>
}
