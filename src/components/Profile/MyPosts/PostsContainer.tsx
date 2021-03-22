import React from 'react';
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType} from "../../../redux/state";

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        addPost: ()=>dispatch(addPostAC()),
        addChangedPost: (text: string) => dispatch(changePostAC(text))
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
