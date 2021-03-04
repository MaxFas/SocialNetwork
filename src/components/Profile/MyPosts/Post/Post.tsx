import React from 'react';
import classes1 from './Post.module.css';

type PostType = {
    message: string,
    likesCount: number
}

function Post(props:PostType) {
    return (
        <div className={classes1.item}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c3/%D0%9F%D0%B0%D1%82%D1%80%D0%B8%D0%B0%D1%80%D1%85_%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB_%D0%BD%D0%B0_%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B5_%D1%81_%D0%9F%D0%B0%D1%82%D1%80%D0%B8%D0%B0%D1%80%D1%85%D0%BE%D0%BC_%D0%A4%D0%B5%D0%BE%D1%84%D0%B8%D0%BB%D0%BE%D0%BC_III_%D0%B8_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%BC_%D0%9F%D1%83%D1%82%D0%B8%D0%BD%D1%8B%D0%BC.jpg'}/>
            <>{props.message}</>
                <div>
                <span> <>{props.likesCount}</> like</span>
            </div>
        </div>

    )
}

export default Post;