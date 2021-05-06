import React from "react";
import {changeMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes} from "../../redux/state";
import {StoreReduxType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: StoreReduxType) => {
    return {
        dialogsPage: state.dialogsPage}
}
let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        onNewMessageChange: (text: string) => dispatch(changeMessageAC(text)),
        onSendMessageClick: () => dispatch(sendMessageAC())
    }
}

export default compose <React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)
(Dialogs)