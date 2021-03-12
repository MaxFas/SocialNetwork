import React from 'react';
import classes1 from './Profile.module.css';
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";


type ProfileType = {
    profile: ProfilePageType
    dispatch: (actions: ActionsTypes) => void
}

function Profile(props: ProfileType) {
    return (
        <div className={classes1.content}>
            <ProfileInfo/>
            <Posts posts={props.profile.posts} newPost={props.profile.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;