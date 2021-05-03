import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";
import {Redirect} from "react-router-dom"

export type LocalDialogsPageType = {
    dialogsPage: DialogPageType
    onSendMessageClick: () => void
    onNewMessageChange: (text: string) => void
    isAuth: boolean
}

function Dialogs(props: LocalDialogsPageType) {

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(event.currentTarget.value)
    }

    const dialogs = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const message = props.dialogsPage.messages.map(m=> <Message key={m.id} message={m.message}/>)

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>{message}</div>
                <div>
                    <div><textarea value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'}/></div>
                    <div><button onClick={onSendMessageClick}>SEND</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;