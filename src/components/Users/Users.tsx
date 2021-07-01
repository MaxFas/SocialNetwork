import React from "react";
import {UserType} from "../../redux/state";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from "./Users.module.css";


export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged:(pageNumber: number)=> void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

export function Users (props: UsersPageType) {

        return(
            <div>
                <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                           totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
                           <div >
                {props.users.map(u => <User key={u.id} follow={props.follow} unFollow={props.unFollow} followingInProgress={props.followingInProgress} user={u}/>)}
                           </div>
            </div>)
}
