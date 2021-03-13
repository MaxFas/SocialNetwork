import {addPostAC, changePostAC, profileReducer} from "./profile-reducer";
import {changeMessageAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi everybody', likesCount: 5},
                {id: 2, message: 'God this is the only future', likesCount: 12},
            ]
        },
        dialogsPage: {
            dialogs: [{id: 1, name: 'Dima'}, {id: 2, name: 'Alina'}, {id: 3, name: 'Vanya'}, {id: 4, name: 'Masha'}, {id: 5, name: 'Katya'}],
            messages: [{ id: 1, message: 'hello'}, {id: 2, message: 'what are you doing?'}, {id: 3, message: 'where is the money Lebowski?'}],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber  () {
        console.log('state was changed')
    },
    getState () {
        return this._state
    },
    subscribe (callback: ()=> void) {
        this._callSubscriber = callback
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

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







