import {combineReducers, createStore, applyMiddleware} from "redux";
import {addPost, profileReducer, setStatus, setUserProfile} from "./profile-reducer";
import {changeMessageAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFetching, toggleFollowingInProgress,
    unFollowSuccess,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import ThunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import {AppReducer, initializedSuccess} from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    App: AppReducer
})

export let store = createStore(reducers, applyMiddleware(ThunkMiddleware))

//@ts-ignore
window.store = store

export type StoreReduxType = ReturnType<typeof reducers>
export type AppThunk<T = void> = ThunkAction<T, StoreReduxType, unknown, ActionsTypes>



export type ActionsTypes = ReturnType<typeof addPost>|
    ReturnType<typeof changeMessageAC>|ReturnType<typeof sendMessageAC>|ReturnType<typeof followSuccess>|
    ReturnType<typeof unFollowSuccess>|ReturnType<typeof setUsers>|
    ReturnType<typeof setTotalUsersCount>| ReturnType<typeof setCurrentPage>| ReturnType<typeof toggleFetching>|
    ReturnType<typeof setUserProfile>| ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleFollowingInProgress>|
    ReturnType<typeof setStatus>|ReturnType<typeof initializedSuccess>