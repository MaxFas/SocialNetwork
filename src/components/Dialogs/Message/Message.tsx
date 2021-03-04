import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type MessageType = {
message: any
}

function Message(props: MessageType) {
    return (
        <div className={classes.message}> {props.message} </div>
    )
}



export default Message;