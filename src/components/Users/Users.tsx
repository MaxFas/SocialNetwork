import React from "react";
import {UserType} from "../../redux/state";
import s from './users.module.css'
import userPhoto from '../../assets/imgs/zadrot.png'
import {NavLink} from "react-router-dom";


export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onPageChanged:(pageNumber: number)=> void
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
                        <NavLink to={'./profile'+u.id}>
                        <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                              alt=""/>
                        </NavLink>
                        </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button> :
                            <button onClick={() => props.follow(u.id)}> Follow</button>}
                    </div>
                </span>
                        <span>
                    <span><div>{u.name}</div><div>{u.status}</div></span>
                     <span><div></div><div></div></span>
                </span>
                    </div>)}
            </div>)
}
