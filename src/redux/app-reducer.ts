import {setAuth} from "./auth-reducer";
import {ActionsTypes, AppThunk} from "./redux-store";

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

export const initializeApp = (): AppThunk => (dispatch) => {
debugger
    let promise = dispatch(setAuth())
    Promise.all([promise])
        .then(()=> {
            dispatch(initializedSuccess())
        })
}