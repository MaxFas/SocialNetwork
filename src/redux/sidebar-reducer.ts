import {SidebarType} from "./state";
import {ActionsTypes} from "./redux-store";

let initialState: SidebarType = {}

export const sidebarReducer = (state =  initialState, action: ActionsTypes) => {
    return state
}