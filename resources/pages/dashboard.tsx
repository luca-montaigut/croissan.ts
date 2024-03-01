import { Button, Container, Heading } from '@chakra-ui/react'
import { Head } from '@inertiajs/react'
import { router } from '@inertiajs/react'

export default function Dashboard(props: { email: string }) {
  return (
    <>
      <Head title="Dashboard" />

      <Container className="container">
        <Heading>Hello {props.email}</Heading>
        <Button onClick={() => router.post('/logout')}>Logout</Button>
      </Container>
    </>
  )
}
