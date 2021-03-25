import React from "react";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType, UserType} from "../../redux/state";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import {Users} from "./Users";

let mapStateToProps = (state: RootStateType) => {
        return {
            users: state.usersPage.users
        }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
        return {
            follow: (userID: number) => {
                dispatch(followAC(userID))
            },
            unFollow: (userID: number) => {
                dispatch(unFollowAC(userID))
            },
            setUsers: (users: Array<UserType>) => {
                dispatch(setUsersAC(users))
        }
        }
}

export default connect (mapStateToProps,mapDispatchToProps) (Users)