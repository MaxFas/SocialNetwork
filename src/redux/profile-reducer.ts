import {ContactType, PhotosType, PostType} from "./state";
import {profileAPI, ProfileForServerType} from "../api/api";
import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";

export type ProfileType = {
    aboutMe: string,
    contacts: ContactType| any,
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string,
    userId?: number,
    photos: PhotosType
}

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi ', likesCount: 5},
        {id: 2, message: 'how are u?', likesCount: 12},
    ],
    profile: {} as ProfileType,
    status: ''
}

type ProfileInitialType = typeof initialState

export const profileReducer = (state: ProfileInitialType = initialState, action: ActionsTypes): ProfileInitialType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        case "SAVE-PHOTO-SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}}
            case "SAVE-PROFILE-INFO":
            return {...state, profile: {...state.profile, ...action.profile}}
        default:
            return state
    }
}

export const addPost = (newPost: string) => ({type: "ADD-POST", newPost} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)
export const savePhotoSuccess = (photos: any) => ({type: 'SAVE-PHOTO-SUCCESS', photos} as const)
export const saveProfileInfo = (profile: ProfileForServerType) => ({type: 'SAVE-PROFILE-INFO', profile} as const)

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

export const savePhoto = (file: any) => {
    return (dispatch: (action: ActionsTypes) => void) => {
        profileAPI.savePhoto(file)
            .then(res =>  {
                if (res.data.resultCode === 0){
                    dispatch(savePhotoSuccess(res.data.data.photos))}}
            )

    }
}

export const saveProfile = (profile: ProfileForServerType) => (dispatch: Dispatch) => {
    debugger
    profileAPI.saveProfile(profile)
        .then(res => {
            if (res.data.resultCode === 0){
                dispatch(saveProfileInfo(profile))
            }

        })
}