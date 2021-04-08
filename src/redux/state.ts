import {changeMessageAC, sendMessageAC} from "./dialogs-reducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFetching, unFollow} from "./users-reducer";
import {addPost, changePost, setUserProfile} from "./profile-reducer";


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

export type UsersType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    location: {city: string, country: string}
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
    profile:ProfileType
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType = {}


export type ActionsTypes = ReturnType<typeof addPost>|ReturnType<typeof changePost>|
    ReturnType<typeof changeMessageAC>|ReturnType<typeof sendMessageAC>|ReturnType<typeof follow>
    |ReturnType<typeof unFollow>|ReturnType<typeof setUsers>|
    ReturnType<typeof setTotalUsersCount>| ReturnType<typeof setCurrentPage>| ReturnType<typeof toggleFetching>|
    ReturnType<typeof setUserProfile>







