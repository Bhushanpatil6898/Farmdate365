import repository from '../repository.js';

class UserRepository {
    async connection() {
        try {
            const response = await repository.get('/verify');
            return response;
        } catch (error) {
            return error;
        }
    }
    async otpgenrate(payload) {
        try {
            const response = await repository.post('/otp', payload);
            return response;
        } catch (error) {
            return error;
        }
    }
    async login(payload) {
        try {
            const response = await repository.post('/login', payload);
            return response;
        } catch (error) {
            return error;
        }
    }
    async logout(payload) {
        try {
            const response = await repository.post('/logout', payload);
            return response;
        } catch (error) {
            return error;
        }
    }
    async registration(payload) {
        try {
            const response = await repository.post('/register', payload);
            return response;
        } catch (error) {
            return error;
        }
    }
    async UserData() {
        try {
            const response = await repository.get('/getuser');
            return response;
        } catch (error) {
            return error;
        }
    }
    async FarmData() {
        try {
           
            const response = await repository.get('user/getfarmdata');
            return response;
        } catch (error) {
            return error;
        }
    }
    async FarmersData() {
        try {
           
            const response = await repository.get('user/farmers');
            return response;
        } catch (error) {
            return error;
        }
    }
    async uploaddata(payload) {
        try {
            const response = await repository.post('/user/uploadfarmdata',payload);
            return response;
        }
        catch (erorr) {
return erorr;
        }

    }
}

export default new UserRepository(); // Exporting an instance
