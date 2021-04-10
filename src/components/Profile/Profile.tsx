import React from 'react';
import classes1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";
import {ProfileType} from "../../redux/state";

type ProfileFCType = {
    profile: ProfileType | null
}

const Profile = (props: ProfileFCType) => {
    return (
        <div className={classes1.content}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile;