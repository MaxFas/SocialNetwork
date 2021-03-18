import React from 'react';
import classes1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreReduxType} from "../../redux/redux-store";
import PostsContainer from "./MyPosts/PostsContainer";


type ProfileType = {
    store: StoreReduxType
}

function Profile(props: ProfileType) {
    return (
        <div className={classes1.content}>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;