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

export const Users = (props: UsersPageType) => {

    if (props.users.length === 0){
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img className={s.userPhoto} src={u.photos.small !== null? u.photos.small: userPhoto} alt=""/></div>
                    <div>
                        {u.followed? <button onClick={()=> props.unFollow(u.id)}>UnFollow</button>:
                            <button onClick={()=> props.follow(u.id)}> Follow</button>}
                    </div>
                </span>
                <span>
                    <span><div>{u.name}</div><div>{u.status}</div></span>
                     <span><div></div><div></div></span>
                </span>
            </div>)}
        </div>
    )
}


// props.setUsers([{id: 1, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg',followed: true,  fullName: 'MaxF', status: 'WHAT THE FUCK IS GOING ON??', location: {city: 'Petrozavodsk', country: 'Russia'}},
//     {id: 2, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg', followed: false,  fullName: 'BillG', status: 'Check my new startup', location: {city: 'Petrozavodsk', country: 'Russia'}},
//     {id: 3, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg',followed: true,  fullName: 'JenyaP', status: 'Working again!!', location: {city: 'Petrozavodsk', country: 'Russia'}},
//     {id: 4, photoUrl:'https://igrasan.ru/wp-content/uploads/2014/05/zadrot.jpg',followed: true,  fullName: 'StasP', status: 'I am a lier', location: {city: 'Petrozavodsk', country: 'Russia'}}])