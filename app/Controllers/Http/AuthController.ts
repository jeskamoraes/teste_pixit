import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login ({ request, auth }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        const token = await auth.use('web').attempt(email, password)
        return token.toJSON

    }

    public async store ({ request }: HttpContextContract) {
        const { email, password } = request.only(['email', 'password'])

        const user = await User.create({
            email,
            password,
        })

        return user

    }



}
