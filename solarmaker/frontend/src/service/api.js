import Axios from "axios"

const api = Axios.create({
    baseURL: "http://localhost:8000/"

})

const sendClients = (json) => {
    console.log(json)
    api.post("/clients/", json).
    then(response => {
        console.log("response: ", response)
    })
}

const sendProjects = (json) => {
    console.log(json)
    api.post("/projects/", json).
    then(response => {
        console.log("response: ", response)
    })
}

export {
    sendClients,
    sendProjects
}