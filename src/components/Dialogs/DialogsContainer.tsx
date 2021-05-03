import React from "react";
import {changeMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes} from "../../redux/state";
import {StoreReduxType} from "../../redux/redux-store";


let mapStateToProps = (state: StoreReduxType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth}
}
let mapDispatchTpProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        onNewMessageChange: (text: string) => dispatch(changeMessageAC(text)),
        onSendMessageClick: () => dispatch(sendMessageAC())
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchTpProps)(Dialogs)

export default DialogsContainer;
