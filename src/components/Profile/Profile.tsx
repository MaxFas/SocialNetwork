import React from 'react';
import classes1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";
import {ProfileType} from "../../redux/state";
import {Redirect} from "react-router-dom";

type ProfileFCType = {
    profile: ProfileType | null
    isAuth: boolean
}

const Profile = (props: ProfileFCType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={classes1.content}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile;