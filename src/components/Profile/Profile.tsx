import React from 'react';
import classes1 from './Profile.module.css';
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfileType = {
    profile: ProfilePageType
    addPost: () => void
    updateText: (newText: string) => void
}

function Profile(props: ProfileType) {
    return (
        <div className={classes1.content}>
            <ProfileInfo/>
            <Posts posts={props.profile.posts} newPost={props.profile.newPostText} addPost={props.addPost} updateText={props.updateText}/>
        </div>
    )
}

export default Profile;