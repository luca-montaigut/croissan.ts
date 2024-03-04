import { Flex, HStack, Container, Box, Stack } from '#styled-system/jsx'
import { Button, Text, Heading } from '../components/ui'
import { css } from '#styled-system/css'
import { Head, router } from '@inertiajs/react'

export default function Home({ isAuthenticated }) {
  return (
    <>
      <Head title="Homepage" />
      <HStack w="100%" pt="2" pb="4" px="8" justify="space-between">
        <Flex align="center" gap={2}>
          <Heading size="4xl" color="#9A2E04">
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
            <Button variant="outline" onClick={() => router.get('/register')} mt={2}>
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
            <Stack gap={{ base: '8', md: '12' }}>
              <Stack gap="4">
                <Stack gap={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
                  <Heading size="4xl" color="white" fontWeight="bolder">
                    Votre prochain projet est déjà en route
                  </Heading>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color="#9A2E04">
                    De l'idée à la mise en prod avec la sérénité d'un petit déjeuner du dimanche
                    matin.
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }} gap="3">
                <Button bgColor="#B9480B" color="white" onClick={() => router.get('/login')}>
                  DÉCOUVRIR LE BONHEUR
                </Button>
              </Stack>
            </Stack>
          </Container>
          <Box
            w={{ base: 'full', lg: '50%' }}
            height={{ base: '96', lg: 'full' }}
            className={css({
              clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
            })}
          >
            <img
              className={css({ height: '100%', width: '100%', objectFit: 'cover' })}
              src="resources/images/morning-coffee.jpg"
              alt="Morning coffee"
            />
          </Box>
        </HStack>
      </Box>
    </>
  )
}
