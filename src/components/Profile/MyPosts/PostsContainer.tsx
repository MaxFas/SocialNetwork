import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {ActionsTypes} from "../../../redux/state";
import {StoreReduxType} from "../../../redux/redux-store";
import {addPost, changePost} from "../../../redux/profile-reducer";

const mapStateToProps = (state: StoreReduxType) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        addPost: ()=>dispatch(addPost()),
        addChangedPost: (text: string) => dispatch(changePost(text))
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
