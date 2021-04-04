import React from "react";
import {UserType} from "../../redux/state";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/imgs/zadrot.png'


export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (pageNumber:number)=> void
}

export class Users extends React.Component<UsersPageType> {

    componentDidMount(): void {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (

            <div>
                {pages.map(p => {
                    return <span onClick={()=> this.onPageChanged(p)} className={this.props.currentPage === p ? s.currentPage : ''}>{p}</span>
                })}
                {this.props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div><img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                              alt=""/></div>
                    <div>
                        {u.followed ? <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button> :
                            <button onClick={() => this.props.follow(u.id)}> Follow</button>}
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
