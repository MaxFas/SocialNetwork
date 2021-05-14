import React from "react";
import style from "./FormControls.module.css";

const FormControl = () => {
     
}

export const Textarea:React.FC<any> =  ({input, meta, ...props}) => {
    return (
        <div className={meta.touched && meta.error? style.error: ''}>
            <div>
            <textarea {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

export const Input:React.FC<any> =  ({input, meta, ...props}) => {
    return (
        <div className={meta.touched && meta.error? style.error: ''}>
            <div>
                <input {...input} {...props}/>
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}


