import {ActionsTypes} from "./state";

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
            return {...state, ...action.userData, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userData: DataUserType) => ({type: "SET_USER_DATA", userData} as const)
