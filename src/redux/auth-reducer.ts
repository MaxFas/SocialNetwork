import {ActionsTypes} from "./state";
import {headerAPI} from "../api/api";

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
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userID: number|null, email: string|null, login: string|null, isAuth: boolean) =>
    ({type: "SET_USER_DATA", payload: {userID, email, login, isAuth}} as const)

export const setAuth = () => (dispatch: (action: ActionsTypes) => void) =>{
    headerAPI.auth()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login,email} = response.data.data
                    dispatch(setAuthUserData(id, login,email,true))
                }
            })
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: (action: ActionsTypes) => void) =>{
    debugger
    headerAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                //@ts-ignore
                dispatch(setAuth())
            }
        })
}

export const logout = () => (dispatch: (action: ActionsTypes) => void) =>{
    headerAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null, false))
            }
        })
}
