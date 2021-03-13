import {ActionsTypes, PostType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case "UPDATE-POST-BODY":
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const)
export const changePostAC = (text: string) => ({type:'UPDATE-POST-BODY', newText: text} as const)