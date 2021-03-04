import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType, DialogType, MessageType} from "../../redux/state";

export type LocalDialogsPageType = {
    dialogPageType: DialogPageType
}

function Dialogs(props: LocalDialogsPageType) {

    const dialogs = props.dialogPageType.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const message = props.dialogPageType.messages.map(m=> <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialogs;