import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogPageType} from "../../redux/state";
import {changeMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";

export type LocalDialogsPageType = {
    dialogPageType: DialogPageType
    dispatch: (actions: ActionsTypes) => void
}

function Dialogs(props: LocalDialogsPageType) {

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageAC(event.currentTarget.value))
    }

    const dialogs = props.dialogPageType.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const message = props.dialogPageType.messages.map(m=> <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>{message}</div>
                <div>
                    <div><textarea value={props.dialogPageType.newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'}/></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;