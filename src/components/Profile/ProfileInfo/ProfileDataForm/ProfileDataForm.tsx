import React, {useEffect} from "react";
import { ProfileDataType} from "../ProfileInfo";
import { useFormik } from 'formik';
import {saveProfile} from "../../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {Contact} from "../Contact/Contact";


export const ProfileDataForm: React.FC<ProfileDataType> = (props)  => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: JSON.stringify(props.profile.contacts),
            aboutMe: props.profile.aboutMe,

        },
        onSubmit: (values) =>  {
            debugger
            dispatch(saveProfile({...values, contacts: JSON.parse(values.contacts)}))
            props.toEditMode(false)
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            {props.owner && <div>
                <button type={"submit"}>Save</button>
            </div>}
            <div>
                <b>Full name</b>: <input {...formik.getFieldProps('fullName')}/>
            </div>
            <div>
                <b>Looking for a job</b>: <input type={'checkbox'} checked={formik.getFieldProps('lookingForAJob').value} {...formik.getFieldProps('lookingForAJob')}/>
            </div>
            <div>
                <b>My professional skills</b>: <textarea {...formik.getFieldProps('lookingForAJobDescription')}/>
            </div>
            <div>
                <b>About me</b> <textarea {...formik.getFieldProps('aboutMe')}/>
            </div>
            <div>
                {Object.keys(props.profile.contacts).map(cont => {
                    return <Contact contactValue={props.profile.contacts[cont]} contactTitle={cont} editMode={props.editMode} formik={formik}/>
                })}
            </div>
        </form>
    )
}
