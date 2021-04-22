import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'b9ca9bb3-c4d5-4d4a-a9b8-46e44fce672e'
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

