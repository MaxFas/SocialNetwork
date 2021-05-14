import React from "react";
import {sendMessageAC} from "../../redux/dialogs-reducer";
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
        onSendMessageClick: (newMessage: string) => dispatch(sendMessageAC(newMessage))
    }
}

export default compose <React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)
(Dialogs)