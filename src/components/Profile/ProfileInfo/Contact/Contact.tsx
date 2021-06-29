import React from "react";


export const Contact: React.FC<{contactTitle: string, contactValue: string|null, editMode: boolean, formik?: any}> = (props) => {
    const {contactTitle, contactValue, editMode, formik} = props

    if (props.contactValue === null) {
        return <span></span>
    }

    const data = formik?.getFieldProps? formik.getFieldProps('contacts'): {}
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const contact = data.value? JSON.parse(data.value) : {[contactTitle]:''}
        contact[contactTitle] = e.currentTarget.value
        e.currentTarget.value = JSON.stringify(contact)
        data.onChange(e)
    }

    if (editMode) return <div ><b>{contactTitle}</b>: <input {...data} value={JSON.parse(data.value)[contactTitle]} onChange={onChangeHandler}/> </div>
    return <div><b>{contactTitle}</b>: {contactValue}</div>

}