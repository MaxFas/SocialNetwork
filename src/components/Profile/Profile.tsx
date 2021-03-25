import React from 'react';
import classes1 from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";

function Profile() {
    return (
        <div className={classes1.content}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}

export default Profile;