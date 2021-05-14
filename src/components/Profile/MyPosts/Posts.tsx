import React from 'react';
import Post from "./Post/Post";
import classes from './Posts.module.css'
import {PostType} from "../../../redux/state";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../assets/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";


type PostsTypePage = {
    addPost: (newPost: string) => void
    posts: Array<PostType>
    newPost: string
}

type AddPostFormType = {
    newPostBody: string
}

const maxLengthPost = maxLengthCreator(10)

function Posts(props: PostsTypePage) {

    const posts = props.posts.map(p => { return(
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    })

    const addNewPost = (values: AddPostFormType) => {
            props.addPost(values.newPostBody)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Posts;

const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
   return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newPostBody'} validate={[required,maxLengthPost]}/>
        </div>
        <div>
            <button>App post</button>
        </div>
    </form>
}

const AddPostFormRedux = reduxForm<AddPostFormType>({
    form: 'AddPost'
})(AddPostForm)
