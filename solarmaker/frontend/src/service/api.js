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

<<<<<<< Updated upstream
const auth = async (username, password) => {
    let response = await api.post(`/api-token-auth/`, { username, password });
    console.log(response)
    return response.data;
  }
=======
const sendUsers = (json) => {
    console.log(json)
    api.post("/users/", json).
    then(response => {
        console.log("response: ", response)
    })
}
>>>>>>> Stashed changes

export {
    sendClients,
    sendProjects,
<<<<<<< Updated upstream
    auth
=======
    sendUsers
>>>>>>> Stashed changes
}