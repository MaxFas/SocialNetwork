import React from "react";
import {UserType} from "../../redux/state";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/imgs/zadrot.png'


export type UsersPageType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<UsersPageType>{
    constructor(props: UsersPageType) {
        super(props);
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

        render () {
            return (
                <div>
                    {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div><img className={s.userPhoto} src={u.photos.small !== null? u.photos.small: userPhoto} alt=""/></div>
                    <div>
                        {u.followed? <button onClick={()=> this.props.unFollow(u.id)}>UnFollow</button>:
                            <button onClick={()=> this.props.follow(u.id)}> Follow</button>}
                    </div>
                </span>
                        <span>
                    <span><div>{u.name}</div><div>{u.status}</div></span>
                     <span><div></div><div></div></span>
                </span>
                    </div>)}
                </div>)
        }
}
