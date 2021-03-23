import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import classes from './Posts.module.css'
import {PostType} from "../../../redux/state";


type PostsTypePage = {
    addPost: () => void
    addChangedPost: (text: string) => void
    posts: Array<PostType>
    newPost: string
}

function Posts(props: PostsTypePage) {

    const posts = props.posts.map(p => { return(
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    })
    const appPost = () => {
        props.addPost()}
    const onChangeAreaValue = (event: ChangeEvent<HTMLTextAreaElement>)=> {
        props.addChangedPost(event.currentTarget.value)}

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
