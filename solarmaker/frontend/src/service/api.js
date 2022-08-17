import Axios from "axios"

const isToken = JSON.parse(localStorage.getItem("token"))

const loginAuth = () => (
    console.log(isToken?.token),
    {
    
    "Authorization": `Token ${localStorage.getItem(isToken?.token)}`,
    "Content-Type": "application/json",
  });



const api = Axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    headers: loginAuth()
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