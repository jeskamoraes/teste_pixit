import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async create({ request }: HttpContextContract) {
        const { name, email, password } = request.only(["name", "email", "password"]);

       const user = await User.create({
            name,
            email,
            password
        });

        return user;
    }

    public async listAll() {
        const all = await User.all();

        return all;
    }

    public async remove({ params }) {
        const user = await User.findOrFail(params.id);
        await user.delete();
    }
}
