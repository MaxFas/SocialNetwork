import React from "react";
import {changeMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType} from "../../redux/state";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage}
}
let mapDispatchTpProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        onNewMessageChange: (text: string) => dispatch(changeMessageAC(text)),
        onSendMessageClick: () => dispatch(sendMessageAC())
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchTpProps)(Dialogs)

export default DialogsContainer;
