import React from 'react';
import classes1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileFCType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    status: string
}

const Profile = (props: ProfileFCType) => {

    return (
        <div className={classes1.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile;