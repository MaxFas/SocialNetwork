import React from "react";
import {UserType} from "../../redux/state";
import s from './users.module.css'
import userPhoto from '../../assets/imgs/zadrot.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingInProgress} from "../../redux/users-reducer";


export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: boolean
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChanged:(pageNumber: number)=> void
    toggleFollowingInProgress: (FollowingInProgress: boolean) => void
}

export function Users (props: UsersPageType) {

        const pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)}

        return(

            <div>
                {pages.map(p => {
                    return <span onClick={()=> props.onPageChanged(p)} className={props.currentPage === p ? s.currentPage : ''}>{p}</span>
                })}
                {props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'./profile/'+u.id}>
                        <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                              alt=""/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed ? <button disabled={props.followingInProgress} onClick={() => {
                            props.toggleFollowingInProgress(true)
                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true, headers: {'API-KEY': 'b9ca9bb3-c4d5-4d4a-a9b8-46e44fce672e'} })
                                    .then(response => {
                                        if (response.data.resultCode === 0){
                                            props.unFollow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false)
                                    })
                            }}>UnFollow</button> :
                            <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true)
                                axios
                                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {userId: u.id},
                                        {
                                            withCredentials: true,
                                            headers: {'API-KEY': 'b9ca9bb3-c4d5-4d4a-a9b8-46e44fce672e'}
                                        }
                                        )
                                    .then(response => {
                                        if (response.data.resultCode === 0){
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingInProgress(false)
                                    })
                            }}> Follow</button>}
                    </div>
                </span>
                        <span>
                    <span><div>{u.name}</div><div>{u.status}</div></span>
                     <span><div></div><div></div></span>
                </span>
                    </div>)}
            </div>)
}
