import {addPostAC, changePostAC} from "./profile-reducer";
import {changeMessageAC, sendMessageAC} from "./dialogs-reducer";
import {followAC, setUsersAC, unFollowAC} from "./users-reducer";


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
}

export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    location: {city: string, country: string}
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    usersPage: UsersType
    sidebar: SidebarType
}

export type ActionsTypes = ReturnType<typeof addPostAC>|ReturnType<typeof changePostAC>|
    ReturnType<typeof changeMessageAC>|ReturnType<typeof sendMessageAC>|ReturnType<typeof followAC>
    |ReturnType<typeof unFollowAC>|ReturnType<typeof setUsersAC>







