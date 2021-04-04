import {ActionsTypes, UsersType, UserType} from "./state";

const initialState: UsersType  = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
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
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const unFollowAC = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)