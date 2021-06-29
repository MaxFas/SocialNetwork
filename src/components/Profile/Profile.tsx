import React from 'react';
import classes1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/preloader/Preloader";

type ProfileFCType = {
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileType) => void
}

const Profile = (props: ProfileFCType) => {

    if (!Object.keys(props.profile).length) return <Preloader/>

    return (
        <div className={classes1.content}>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile;