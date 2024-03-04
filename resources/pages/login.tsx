import { router, useForm } from '@inertiajs/react'
import { Flex, HStack, Container, Box, Stack } from '#styled-system/jsx'
import { Button, Text, Heading, Checkbox, Link, FormLabel, Input } from '../components/ui'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

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
    post('/login')
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
              <Heading size="2xl">Connexion à votre compte</Heading>
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
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Se souvenir de moi</Checkbox>
                  <Button variant="ghost" size="sm">
                    Mot de passe oublié ?
                  </Button>
                </HStack>
                <Button type="submit" disabled={processing}>
                  Se connecter
                </Button>
              </Stack>
            </form>
          </Stack>
          <Text textStyle="sm" color="fg.muted">
            Pas encore de compte ? <Link onClick={() => router.get('/register')}>S'inscrire</Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
