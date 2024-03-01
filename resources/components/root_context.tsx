import type { PropsWithChildren } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootContext({ children }: PropsWithChildren) {
  return <ChakraProvider>{children}</ChakraProvider>
}
