import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'ed6948f7-390a-43c6-b893-9387c49b3e1e'
    },
})


export const usersAPI = {
    getUsers (pageSize: number, currentPage: number) {
        return  (
            instance
                .get(`users?count=${pageSize}&page=${currentPage}`)
                .then(response => response.data))
    }
}


