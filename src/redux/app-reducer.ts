import {ActionsTypes} from "./state";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setAuth} from "./auth-reducer";

let initialState = {
    initializedSuccess: false
}

type AppReducerType = typeof initialState

export const AppReducer = (state = initialState, action: ActionsTypes): AppReducerType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, initializedSuccess: true}
        default:
            return state
    }
}

export const initializedSuccess = () =>
    ({type: "INITIALIZED_SUCCESS"} as const)

export const initializeApp = () => (dispatch: (action: ActionsTypes) => void) => {
debugger
    //@ts-ignore
    let promise = dispatch(setAuth())
    Promise.all([promise])
        .then(()=> {
            dispatch(initializedSuccess())
        })
}