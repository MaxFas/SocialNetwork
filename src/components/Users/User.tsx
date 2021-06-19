import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/imgs/zadrot.png";
import {UserType} from "../../redux/state";

export type UserPageType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unFollow: (userID: number) => void

}

export const User: React.FC<UserPageType> = (props) => {

    const {user, followingInProgress,follow, unFollow} = props

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'./profile/' + user.id}>
                        <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto}
                             alt=""/>
                        </NavLink>
                        </div>
                    <div>
                        {user.followed ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unFollow(user.id)
                            }}>UnFollow</button> :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}> Follow</button>}
                    </div>
                </span>
            <span>
                    <span><div>{user.name}</div><div>{user.status}</div></span>
                     <span><div></div><div></div></span>
                </span>
        </div>)
}