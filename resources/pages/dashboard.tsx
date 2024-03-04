import { Container } from '#styled-system/jsx'
import { Button, Heading } from '../components/ui'
import { Head } from '@inertiajs/react'
import { router } from '@inertiajs/react'

export default function Dashboard(props: { email: string }) {
  return (
    <>
      <Head title="Dashboard" />

      <Container className="container">
        <Heading size="2xl">Hello {props.email}</Heading>
        <Button onClick={() => router.post('/logout')}>Logout</Button>
      </Container>
    </>
  )
}
