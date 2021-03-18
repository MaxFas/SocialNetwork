import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogPageType} from "../../redux/state";
import {changeMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreReduxType} from "../../redux/redux-store";

export type DialogsContainerType = {
    store: StoreReduxType
}

function DialogsContainer(props: DialogsContainerType) {

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (text:string) => {
        props.store.dispatch(changeMessageAC(text))
    }
    return <Dialogs dialogsPage={props.store.getState().dialogsPage}
                    onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}/>

}

export default DialogsContainer;
