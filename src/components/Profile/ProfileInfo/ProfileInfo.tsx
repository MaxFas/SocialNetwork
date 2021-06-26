import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import photo from "./../../../assets/imgs/zadrot.png"
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import {Contact} from "./Contact/Contact";


export type ProfileInfoType = {
    profile: ProfileType
    updateStatus: (status: string) => void
    status: string
    isOwner: boolean
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
}

function ProfileInfo(props: ProfileInfoType) {

    const [editMode, setEditMode] = useState(false)

    if (!Object.keys(props.profile).length) return <Preloader/>

    const onMainPhotoSelected =(event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.currentTarget.files) return
        props.savePhoto(event.currentTarget.files[0])
    }

    return (

        <div>
            <div className={s.descriptionPost}>
                <img className={s.avatar}
                     src={props.profile.photos.large !== null ? props.profile.photos.large : photo}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode?
                    <ProfileDataForm profile={props.profile} owner={props.isOwner} toEditMode={setEditMode} editMode={editMode}/>:
                    <ProfileData profile={props.profile} owner={props.isOwner} toEditMode={setEditMode} editMode={editMode}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export type ProfileDataType = {
    profile: ProfileType
    owner: boolean
    toEditMode: (editMode:boolean) => void
    editMode: boolean
}

function ProfileData (props: ProfileDataType) {

    return (
        <div>
            {props.owner && <div>
                <button onClick={() => {
                    props.toEditMode(true)
                }}>Edit
                </button>
            </div>}
            <div>
                <b>Full name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob? "yes": "no"}
            </div>
            {props.profile.lookingForAJob && <div>
                <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
            <div>
                {Object.keys(props.profile.contacts).map(cont => {
                    return <Contact contactValue={props.profile.contacts[cont]} contactTitle={cont} editMode={props.editMode}/>
                })}
            </div>
        </div>
    )
}





export default ProfileInfo;