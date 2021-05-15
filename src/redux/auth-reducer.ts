import {ActionsTypes} from "./state";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

let initialState = {
    id: null as null|number,
    login: null as null| string,
    email: null as null| string,
    isAuth: false
}

export type DataUserType = typeof initialState

export const authReducer = (state: DataUserType = initialState, action: ActionsTypes): DataUserType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = (email: string |null,  id: number|null, login: string|null, isAuth: boolean) =>
    ({type: "SET_USER_DATA", payload: {id, email, login, isAuth}} as const)

export const setAuth = () => (dispatch: (action: ActionsTypes) => void) =>{
    return authAPI.auth()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    dispatch(setAuthUserData(email, id, login,true))
                }
            })
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: (action: ActionsTypes) => void) =>{
    debugger
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                //@ts-ignore
                dispatch(setAuth())
            } else {
                let error = response.data.messages.length > 0? response.data.messages[0]: 'Some Error'
                //@ts-ignore
                dispatch(stopSubmit('login', {_error: error}))
            }
        })
}

export const logout = () => (dispatch: (action: ActionsTypes) => void) =>{
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null, false))
            }
        })
}
