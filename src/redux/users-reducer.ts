import {UserType} from "./state";
import {usersAPI} from "../api/api";
import {ActionsTypes} from "./redux-store";

export type UsersType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>,
}

const initialState: UsersType  = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: true}
                }
                    return u
                })}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u
            })}
        case "SET_USERS":
            return {...state, users: [...action.users]}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
            case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
            case "CHANGE_FETCHING":
            return {...state, isFetching: action.isFetching}
            case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] :
                    state.followingInProgress.filter(id => id !== action.userID)}
        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const unFollowSuccess = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const toggleFetching = (isFetching: boolean) => ({type: 'CHANGE_FETCHING', isFetching} as const)
export const toggleFollowingInProgress = (isFetching: boolean, userID: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userID} as const)

export const requestUsers = (pageSize: number, currentPage:number) =>
    (dispatch: (action: ActionsTypes) => void) => {
    dispatch(toggleFetching(true))
    usersAPI.getUsers(pageSize, currentPage).then(response => {
        dispatch(toggleFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    })
}

export const follow = (userID: number) =>
    (dispatch: (action: ActionsTypes) => void) => {
        dispatch(toggleFollowingInProgress(true, userID))
        usersAPI.follow(userID)
            .then(response => {
                if (response.data.resultCode === 0){
                   dispatch(followSuccess(userID))}
                dispatch(toggleFollowingInProgress(false, userID))
            })
}

export const unFollow = (userID: number) =>
    (dispatch: (action: ActionsTypes) => void) => {
        dispatch(toggleFollowingInProgress(true, userID))
        usersAPI.unFollow(userID)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(unFollowSuccess(userID))}
                dispatch(toggleFollowingInProgress(false, userID))
            })
    }