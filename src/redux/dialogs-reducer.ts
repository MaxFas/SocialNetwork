import {ActionsTypes, DialogPageType} from "./state";

const initialState: DialogPageType = {
    dialogs: [{id: 1, name: 'Dima'}, {id: 2, name: 'Alina'}, {id: 3, name: 'Vanya'}, {id: 4, name: 'Masha'}, {
        id: 5,
        name: 'Katya'
    }],
    messages: [{id: 1, message: 'hello'}, {id: 2, message: 'what are you doing?'}, {
        id: 3,
        message: 'where is the money Lebowski?'
    }],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.newMessageBody}],
                newMessageBody: ''
            }
        case "UPDATE-MESSAGE-BODY":
            return {...state, newMessageBody: action.newText}
        default:
            return state
    }
}

export const changeMessageAC = (text: string) => ({type: 'UPDATE-MESSAGE-BODY', newText: text} as const)
export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)