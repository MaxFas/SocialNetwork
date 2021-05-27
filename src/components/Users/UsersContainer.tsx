import React from "react";
import {connect} from "react-redux";
import {UserType} from "../../redux/state";
import {Users} from "./Users";
import {StoreReduxType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader/Preloader";
import {
    follow,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow, requestUsers
} from "../../redux/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

export type UsersContainerType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userID: number) => void
    requestUsers: (pageSize: number,currentPage:number) => void

}

export class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount(): void {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage)
        }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(this.props.pageSize, pageNumber)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
            </div>
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose <React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingInProgress,
        requestUsers,
    }),)
(UsersContainer)