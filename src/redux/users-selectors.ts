import {StoreReduxType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: StoreReduxType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {return users})

export const getPageSize = (state: StoreReduxType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: StoreReduxType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: StoreReduxType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: StoreReduxType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: StoreReduxType) => {
    return state.usersPage.followingInProgress
}
