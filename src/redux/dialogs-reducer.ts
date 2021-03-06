import {ActionsTypes, DialogPageType} from "./state";

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            state.messages.push({id: 6, message: state.newMessageBody});
            state.newMessageBody = '';
            return state
        case "UPDATE-MESSAGE-BODY":
            state.newMessageBody = action.newText;
            return state
        default: return state
    }
}

export const changeMessageAC = (text: string) => ({type:'UPDATE-MESSAGE-BODY', newText: text} as const)
export const sendMessageAC = () => ({type:'SEND-MESSAGE'} as const)