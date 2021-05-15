import {changeMessageAC, sendMessageAC} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching, toggleFollowingInProgress,
    unFollowSuccess
} from "./users-reducer";
import {addPost, setStatus, setUserProfile} from "./profile-reducer";
import {setAuth, setAuthUserData} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    location: {city: string, country: string}
}

export type ContactType = {
    facebook: string | null,
    website: null | string,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: null | string,
    github: string | null,
    mainLink: null | string
}
export type PhotosType = {
    small: string,
    large: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}


export type ActionsTypes = ReturnType<typeof addPost>|
    ReturnType<typeof changeMessageAC>|ReturnType<typeof sendMessageAC>|ReturnType<typeof followSuccess>|
    ReturnType<typeof unFollowSuccess>|ReturnType<typeof setUsers>|
    ReturnType<typeof setTotalUsersCount>| ReturnType<typeof setCurrentPage>| ReturnType<typeof toggleFetching>|
    ReturnType<typeof setUserProfile>| ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleFollowingInProgress>|
    ReturnType<typeof setStatus>|ReturnType<typeof initializedSuccess>







