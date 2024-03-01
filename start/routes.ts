/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const SessionController = () => import('#controllers/session_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/', async ({ auth, inertia }) => {
  const isAuthenticated = auth.isAuthenticated
  return inertia.render('homepage', { isAuthenticated })
})

router
  .group(() => {
    router.get('/register', ({ inertia }) => {
      return inertia.render('register')
    })
    router.post('/register', [SessionController, 'register'])
    router.get('/login', ({ inertia }) => {
      return inertia.render('login')
    })
    router.post('/login', [SessionController, 'login'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.get('/dashboard', ({ inertia, auth }) => {
      const user = auth.getUserOrFail()

      return inertia.render('dashboard', {
        user: user,
      })
    })
    router.post('/logout', [SessionController, 'logout'])
  })
  .use(middleware.auth())
