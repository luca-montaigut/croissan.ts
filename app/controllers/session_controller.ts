import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class SessionController {
  async register({ request, response, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    try {
      await User.create({ email, password })
    } catch (error) {
      session.flash('errors', 'Prout!')
      return response.redirect().back()
    }
    response.redirect('/login')
  }

  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    response.redirect('/dashboard')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    response.redirect('/login')
  }
}
