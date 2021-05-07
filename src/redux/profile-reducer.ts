import {ActionsTypes, ContactType, PhotosType, PostType} from "./state";
import {profileAPI} from "../api/api";

export type ProfileType = {
    aboutMe: string,
    contacts: ContactType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string,
    userId: number,
    photos: PhotosType
}

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi everybody', likesCount: 5},
        {id: 2, message: 'God this is the only future', likesCount: 12},
    ],
    profile: null as ProfileType | null,
    status: ''
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
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = () => ({type: "ADD-POST"} as const)
export const changePost = (text: string) => ({type: 'UPDATE-POST-BODY', newText: text} as const)
export const setUserProfile = (profile: ProfileType | null) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const getUserProfile = (userID: string) =>
    (dispatch: (action: ActionsTypes) => void) => {
        profileAPI.getProfile(userID)
            .then(response => dispatch(setUserProfile(response.data)))
    }
export const getProfileStatus = (userID: string) => {
    return (dispatch: (action: ActionsTypes) => void) => {
        profileAPI.getStatus(userID)
            .then(res =>  dispatch(setStatus(res.data)))

    }
}

export const updateStatus = (status: string) => {
    return (dispatch: (action: ActionsTypes) => void) => {
        profileAPI.updateStatus(status)
            .then(res =>  {
                if (res.data.resultCode === 0){
                    dispatch(setStatus(status))}}
               )

    }
}