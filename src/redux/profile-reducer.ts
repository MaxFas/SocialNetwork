import {ActionsTypes, PostType, ProfilePageType} from "./state";

let initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi everybody', likesCount: 5},
        {id: 2, message: 'God this is the only future', likesCount: 12},
    ]
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}
        case "UPDATE-POST-BODY":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const)
export const changePostAC = (text: string) => ({type: 'UPDATE-POST-BODY', newText: text} as const)