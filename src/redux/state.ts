import {addPostAC, changePostAC, profileReducer} from "./profile-reducer";
import {changeMessageAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (callback: ()=> void) => void
    dispatch: (action: ActionsTypes) => void
}
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
    sidebar: SidebarType
}

export type ActionsTypes = ReturnType<typeof addPostAC>|ReturnType<typeof changePostAC>|
    ReturnType<typeof changeMessageAC>| ReturnType<typeof sendMessageAC>







