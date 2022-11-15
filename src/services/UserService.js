import HttpService from "./HttpService";

class UserService extends HttpService {
    static async signIn(data) {
        const response = await this.post('/signin', data);

        return response;
    }

    static async signUp(data) {
        const response = await this.post('/signup', data);

        return response;
    }
}

export default UserService;