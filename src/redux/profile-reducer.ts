import {ActionsTypes, PostType, ProfileType} from "./state";


let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi everybody', likesCount: 5},
        {id: 2, message: 'God this is the only future', likesCount: 12},
    ],
    profile: null as ProfileType | null
}

type ProfileInitialType = typeof initialState

export const profileReducer = (state: ProfileInitialType = initialState, action: ActionsTypes): ProfileInitialType => {
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
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost = () => ({type: "ADD-POST"} as const)
export const changePost = (text: string) => ({type: 'UPDATE-POST-BODY', newText: text} as const)
export const setUserProfile = (profile: ProfileType | null) => ({type: 'SET-USER-PROFILE', profile} as const)