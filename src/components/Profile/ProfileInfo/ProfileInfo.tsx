import React from 'react';
import classes1 from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


export type ProfileInfoType = {
    profile: ProfileType | null
    updateStatus: (status: string) => void
    status: string
}

function ProfileInfo(props: ProfileInfoType) {

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={classes1.img}*/}
            {/*        src={'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-05/TASS_7803732.jpg?itok=6sNpt6vA'}/>*/}
            {/*</div>*/}
            <div className={classes1.descriptionPost}>
                <img src={props.profile ? props.profile.photos.large:'' } alt="User photo"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;