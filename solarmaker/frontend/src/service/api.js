import Axios from "axios"

const api = Axios.create({
    baseURL: "http://localhost:8000/api/v1/"

})

const sendClients = (json) => {
    api.post("/clientes/", json).
    then(response => {
        console.log("response: ", response)
    })
}

const sendProjects = (json) => {
    api.post("/projects/", json).
    then(response => {
        console.log("response: ", response)
    })
}

const auth = async (username, password) => {
    let response = await api.post(`/api-token-auth/`, { username, password });
    
    return response.data;
}

const sendUsers = (json) => {
    api.post("/users/", json).
    then(response => {
        console.log("response: ", response)
    })
}

const refreshToken = () => {
    localStorage.clear();
    document.location.reload(true);
}

export {
    sendClients,
    sendProjects,
    auth,
    sendUsers,
    refreshToken
}