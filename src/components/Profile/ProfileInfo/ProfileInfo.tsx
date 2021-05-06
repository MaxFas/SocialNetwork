import React from 'react';
import classes1 from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";


export type ProfileInfoType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfoType) {

    return (
        <div>
            <div>
                <img className={classes1.img}
                    src={'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-05/TASS_7803732.jpg?itok=6sNpt6vA'}/>
            </div>
            <div className={classes1.descriptionPost}>
                <img src={props.profile ? props.profile.photos.large:'' } alt="User photo"/>
            </div>
        </div>
    )
}

export default ProfileInfo;