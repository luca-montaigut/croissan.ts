import {
  Text,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Box,
  Img,
  Avatar,
  HStack,
} from '@chakra-ui/react'
import { Head, router } from '@inertiajs/react'

export default function Home({ isAuthenticated, tournaments }) {
  return (
    <>
      <Head title="Homepage">
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥐</text></svg>"
        />
      </Head>
      <HStack w="100%" pt="2" pb="4" px="8" justify="space-between">
        <Flex align="center" gap={2}>
          <Heading size="lg" color="#9A2E04">
            🥐 Croissan.ts
          </Heading>
        </Flex>

        {isAuthenticated ? (
          <Button onClick={() => router.get('/logout')} mt={2}>
            Register
          </Button>
        ) : (
          <Flex gap={4}>
            <Button onClick={() => router.get('/login')} mt={2}>
              Se connecter
            </Button>
            <Button variant="secondary" onClick={() => router.get('/register')} mt={2}>
              S'inscrire
            </Button>
          </Flex>
        )}
      </HStack>
      <Box height="100%" bgColor="#EBC186">
        <HStack
          direction={{ base: 'column', lg: 'row' }}
          justify={{ lg: 'space-between' }}
          height="full"
        >
          <Container>
            <Stack spacing={{ base: '8', md: '12' }}>
              <Stack spacing="4">
                <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
                  <Heading size={{ base: 'md', md: 'xl' }} color="white" fontWeight="bolder">
                    Votre prochain projet est déjà en route
                  </Heading>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color="#9A2E04">
                    De l'idée à la mise en prod avec la sérénité d'un petit déjeuner du dimanche
                    matin.
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
                <Button bgColor="#B9480B" color="white" onClick={() => router.get('/login')}>
                  DÉCOUVRIR LE BONHEUR
                </Button>
              </Stack>
            </Stack>
          </Container>
          <Box
            w={{ base: 'full', lg: '50%' }}
            height={{ base: '96', lg: 'full' }}
            sx={{
              clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
            }}
          >
            <Img
              h="100%"
              w="100%"
              objectFit="cover"
              backgroundPosition="right"
              src="resources/images/morning-coffee.jpg"
              alt="Morning coffee"
            />
          </Box>
        </HStack>
      </Box>
    </>
  )
}
