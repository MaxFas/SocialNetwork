import axios from "axios";
import {ContactType} from "../redux/state";


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
    },
    follow (userID: number){
       return instance
            .post(`follow/${userID}`)
    },
    unFollow (userID: number){
        return instance
            .delete(`follow/${userID}`)
    },
}

export const profileAPI = {
    getProfile (userID: string){
        return instance
            .get(`profile/${userID}`)
    },
    getStatus (userID: string) {
        return instance
            .get(`profile/status/` + userID)
    },
    updateStatus (status: string) {
        return instance
            .put(`profile/status`, {status})
    },
    savePhoto (file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    },
    saveProfile (profile: ProfileForServerType) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    auth () {
        return instance
            .get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance
            .delete(`auth/login` )
    }
}

export type ProfileForServerType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: ContactType
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}


