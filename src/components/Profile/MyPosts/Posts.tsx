import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import classes from './Posts.module.css'
import {PostType} from "../../../redux/state";

type PostsTypePage = {
    posts: Array<PostType>
    addPost: () => void
    updateText: (newText: string) => void
    newPost: string
}

function Posts(props: PostsTypePage) {

    const posts = props.posts.map(p => { return(
        <Post message={p.message} likesCount={p.likesCount}/>)
    })

    const appPost = () => {
        props.addPost()
    }

    const onChangeAreaValue = (event: ChangeEvent<HTMLTextAreaElement>)=> {
        props.updateText(event.currentTarget.value)
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
