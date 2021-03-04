import {rerenderMainTree} from "../render";

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
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export let state: RootStateType =
    {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi everybody', likesCount: 5},
                {id: 2, message: 'God this is the only future', likesCount: 12},
            ]
        },
        dialogsPage: {
            dialogs: [{id: 1, name: 'Dima'}, {id: 2, name: 'Alina'}, {id: 3, name: 'Vanya'}, {id: 4, name: 'Masha'}, {id: 5, name: 'Katya'}],
            messages: [{ id: 1, message: 'hello'}, {id: 2, message: 'what are you doing?'}, {id: 3, message: 'where is the money Lebowski?'}]
        },
        sidebar: {}
    }

   export const addPost = () => {
            const newPost: PostType = {
                id: 5,
                message: state.profilePage.newPostText,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = ''
       rerenderMainTree(state)
    }

    export const updateText = (newText: string) => {
        state.profilePage.newPostText = newText;
        rerenderMainTree(state)
    }


