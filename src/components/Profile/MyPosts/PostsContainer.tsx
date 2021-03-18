import React from 'react';
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import {StoreReduxType} from "../../../redux/redux-store";
import Posts from "./Posts";

type PostsContainerTypePage = {
    store: StoreReduxType
}

function PostsContainer(props: PostsContainerTypePage) {

    const appPost = () => {
        props.store.dispatch(addPostAC())}

    const addChangedPost = (text: string)=> {
        props.store.dispatch(changePostAC(text))}

    return <Posts newPost={props.store.getState().profilePage.newPostText} posts={props.store.getState().profilePage.posts}
    addPost={appPost} addChangedPost={addChangedPost}/>

}

export default PostsContainer;
