import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import classes from './Posts.module.css'
import {ActionsTypes, PostType} from "../../../redux/state";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";

type PostsTypePage = {
    posts: Array<PostType>
    dispatch: (actions: ActionsTypes) => void
    newPost: string
}

function Posts(props: PostsTypePage) {

    const posts = props.posts.map(p => { return(
        <Post message={p.message} likesCount={p.likesCount}/>)
    })

    const appPost = () => {
        props.dispatch(addPostAC())
    }

    const onChangeAreaValue = (event: ChangeEvent<HTMLTextAreaElement>)=> {
        props.dispatch(changePostAC(event.currentTarget.value))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPost} onChange={onChangeAreaValue}/>
                </div>
                <div>
                    <button onClick={appPost}>App post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Posts;
