import axios from "axios"

const acess_token = JSON.parse(localStorage.getItem("token"))

class Api {
    constructor() {
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
                    this.refreshToken();
                }
                return Promise.reject(error);
            }
        )
    }

    /**
     * 
     * Clients
     * 
    */

    async sendClients(json) {
        let response = await this.axios.post("/clientes/", json);
        return response.data
    }

    async getClients(json) {
        let response = await this.axios.get("/clientes/", json);
        return response.data
    }

    async getClient(id) {
        let response = await this.axios.get(`/clientes/${id}/`);
        return response.data
    }

    async deleteClients(id) {
        let response = await this.axios.delete(`/clientes/${id}/`);
        return response.data
    }
    
    /**
     * 
     * Projects
     * 
    */
    
    async sendProjects(json) {
        let response = await this.axios.post("/projetos/", json);
        return response.data
    }

    async getProjects() {
        let response = await this.axios.get("/projetos/");
        return response.data
    }

    async deleteProjects(id) {
        let response = await this.axios.delete(`/projetos/${id}/`);
        return response.data
    }

    /**
     * 
     * Users
     * 
    */

    async sendUsers(json) {
        let response = await this.axios.post("/vendedores/", json);
        return response.data
    }

    async getUsers() {
        let response = await this.axios.get("/vendedores/");
        return response.data
    }

    async getUser(id) {
        let response = await this.axios.get(`/vendedores/${id}/`);
        return response.data
    }

    async updateUser(id) {
        let response = await this.axios.put(`/vendedores/${id}/`);
        return response.data
    }

    async deleteUser(id) {
        let response = await this.axios.delete(`/vendedores/${id}/`);
        return response.data
    }
    
    async refreshToken() {
        localStorage.clear();
        document.location.reload(true);
    }
}

const api = new Api();
export default api;