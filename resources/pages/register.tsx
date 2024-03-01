import { router, useForm } from '@inertiajs/react'
import {
  Flex,
  FormLabel,
  Input,
  Button,
  Box,
  Container,
  FormControl,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

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
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            <Flex align="center" gap={2}>
              <Heading size="md" color="#9A2E04" cursor="pointer" onClick={() => router.get('/')}>
                🥐 Croissan.ts
              </Heading>
            </Flex>
            <Stack spacing="3" textAlign="center">
              <Heading size="xs">Rejoindre l'aventure</Heading>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <form onSubmit={handleSubmit}>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    placeholder="Entrer votre email"
                    type="email"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Mot de passe</FormLabel>
                  <Input
                    id="password"
                    placeholder="********"
                    type="password"
                    onChange={handleChange}
                  />
                </FormControl>

                <Button type="submit" isDisabled={processing}>
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
