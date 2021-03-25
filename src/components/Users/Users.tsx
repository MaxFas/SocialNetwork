import React from "react";
import {UserType} from "../../redux/state";
import s from './users.module.css'

export type UsersPageType = {
    users: Array<UserType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: UsersPageType) => {

    if (props.users.length === 0){
        props.setUsers([{id: 1, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg',followed: true,  fullName: 'MaxF', status: 'WHAT THE FUCK IS GOING ON??', location: {city: 'Petrozavodsk', country: 'Russia'}},
            {id: 2, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg', followed: false,  fullName: 'BillG', status: 'Check my new startup', location: {city: 'Petrozavodsk', country: 'Russia'}},
            {id: 3, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg',followed: true,  fullName: 'JenyaP', status: 'Working again!!', location: {city: 'Petrozavodsk', country: 'Russia'}},
            {id: 4, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg',followed: true,  fullName: 'StasP', status: 'I am a lier', location: {city: 'Petrozavodsk', country: 'Russia'}}])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img className={s.userPhoto} src={u.photoUrl} alt=""/></div>
                    <div>
                        {u.followed? <button onClick={()=> props.unFollow(u.id)}>UnFollow</button>:
                            <button onClick={()=> props.follow(u.id)}> Follow</button>}
                    </div>
                </span>
                <span>
                    <span><div>{u.fullName}</div><div>{u.status}</div></span>
                     <span><div>{u.location.city}</div><div>{u.location.country}</div></span>
                </span>
            </div>)}
        </div>
    )
}