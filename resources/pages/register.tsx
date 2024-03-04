import { router, useForm } from '@inertiajs/react'
import { Flex, Container, Box, Stack } from '#styled-system/jsx'
import { Button, Text, Heading, Link, FormLabel, Input } from '../components/ui'

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  console.log({ errors })

  function handleChange(e) {
    const key = e.target.id
    const value = e.target.value
    setData((values) => ({
      ...values,
      [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    post('/register')
  }

  return (
    <Box h="100%" py={{ base: '12' }} bg="#EBC186">
      <Container
        maxW="md"
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg.surface' }}
        boxShadow={{ base: 'none', sm: 'xl' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
        bgColor="white"
      >
        <Stack gap="8">
          <Stack gap="6" align="center">
            <Flex align="center" gap={2}>
              <Heading size="4xl" color="#9A2E04" cursor="pointer" onClick={() => router.get('/')}>
                🥐 Croissan.ts
              </Heading>
            </Flex>
            <Stack gap="3" textAlign="center">
              <Heading size="2xl">Rejoindre l'aventure</Heading>
            </Stack>
          </Stack>
          <Stack gap="6">
            <form onSubmit={handleSubmit}>
              <Stack gap="5">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="Entrer votre email"
                  type="email"
                  onChange={handleChange}
                />
                <FormLabel htmlFor="password">Mot de passe</FormLabel>
                <Input
                  id="password"
                  placeholder="********"
                  type="password"
                  onChange={handleChange}
                />

                <Button type="submit" disabled={processing}>
                  S'inscrire
                </Button>
              </Stack>
            </form>
          </Stack>
          <Text textStyle="sm" color="fg.muted">
            Déjà enregistré ? <Link onClick={() => router.get('/login')}>Se connecter</Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
