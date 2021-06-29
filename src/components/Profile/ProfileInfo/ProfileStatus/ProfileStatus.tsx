import React, {ChangeEvent, useEffect, useState} from "react";
import s from '../ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const ChangeModeOn = () => {
        setEditMode(true)
    }

    const ChangeModeOff = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div className={s.status}>
            {editMode ?
                <div >
                    <input type="text" onChange={onStatusChange} onBlur={ChangeModeOff} autoFocus={true}
                           value={status}/>
                </div> :
                <div>
                    <b>Status:</b> <span onDoubleClick={ChangeModeOn}>{props.status || "YOUR STATUS"}</span>
                </div>}


        </div>
    )
}