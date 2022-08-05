
import User from 'App/Models/User';

export default class UsersController {
    
    public async listAll() {
        const all = await User.all();

        return all;
    }

    public async remove({ params }) {
        const user = await User.findOrFail(params.id);
        await user.delete();
    }
}
