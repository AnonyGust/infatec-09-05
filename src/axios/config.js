import axios from "axios"

const infatecFetch = axios.create({
    baseURL: "https://localhost:3000",
})

export default infatecFetch