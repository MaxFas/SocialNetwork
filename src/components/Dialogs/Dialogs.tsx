import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";
// @ts-ignore
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../assets/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";

export type LocalDialogsPageType = {
    dialogsPage: DialogPageType
    onSendMessageClick: (newMessageBody: string) => void
}

type AddMessageFormType = {
    newMessageBody: string
}

const maxLengthText = maxLengthCreator(50)

function Dialogs(props: LocalDialogsPageType) {


    let addNewMessage = (values: AddMessageFormType) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    const dialogs = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const message = props.dialogsPage.messages.map(m=> <Message key={m.id} message={m.message}/>)



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>{message}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'Enter your message'} name={'newMessageBody'} component={Textarea} validate={[required, maxLengthText]}/></div>
        <div><button>SEND</button></div>
    </form>
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'dialogAddMessage'
})(AddMessageForm)


export default Dialogs;