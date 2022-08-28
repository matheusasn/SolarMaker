import axios from "axios"

class Auth {
    constructor() {
        this.axios = axios.create({
            baseURL: "http://localhost:8000/api/v1/",
            timeout: 30000,
            withCredentials: true,
        })
    }

    async authenticateUser(username, password) {
        if (username && password) {
            let response = await this.axios.post(`/api-token-auth/`, { username, password });
            return response.data;
        } else {
                return "Invalid username/password";
        }
    }
}

const auth = new Auth();
export default auth;