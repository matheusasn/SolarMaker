import axios from "axios"

const acess_token = JSON.parse(localStorage.getItem("token"))

class Api {
    constructor() {
        console.log("aqui!!!!", acess_token?.token)
        this.axios = axios.create({
            baseURL: "http://localhost:8000/api/v1/",
            timeout: 30000,
            headers: {
                "Authorization": `Token ${acess_token?.token}`
            },
            withCredentials: true,
        })
        this.axios.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                if (error.response.status === 401 && acess_token.token) {
                    // this.refreshToken();
                    console.log(error.response.status)
                }
                return Promise.reject(error);
            }
        )
    }

    async sendClients(json) {
        let response = await this.axios.post("/clientes/", json);
        console.log(response);
        return response.data
    }
    
    async sendProjects(json) {
        let response = await this.axios.post("/projetos/", json);
        console.log(response);
        return response.data
    }

    async sendUsers(json) {
        let response = await this.axios.post("/users/", json);
        console.log(response);
        return response.data
    }
    
    async refreshToken() {
        localStorage.clear();
        document.location.reload(true);
    }
}
// const isToken = JSON.parse(localStorage.getItem("token"))

// const loginAuth = () => ({
//     "Authorization": `Token ${isToken?.token}`,
//     "Content-Type": "application/json",
//   });

const api = new Api();
export default api;