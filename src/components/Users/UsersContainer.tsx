import React from "react";
import {connect} from "react-redux";
import {UserType} from "../../redux/state";
import {Users} from "./Users";
import {StoreReduxType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader/Preloader";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching,
    unFollow
} from "../../redux/users-reducer";
import {usersAPI} from "../../api/api";

export type UsersContainerType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    toggleFetching: (isFetching: boolean)=> void
}

export class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount(): void {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.pageSize,pageNumber).then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            <div>
            {this.props.isFetching?<Preloader/>: null}
        </div>
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleFetching,})(UsersContainer)