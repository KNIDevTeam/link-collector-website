import BasicService from "./BasicService";
import axios from 'axios';

export default class AuthService extends BasicService{
    async login(token) {
        return await axios.post(this.API_URL + 'auth/login?content=' + encodeURI(token)).then(response => {
            return response.data;
        }).catch(err => {
            return err.response.data;
        });
    }
}