import React from 'react';
import classes1 from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={classes1.img}
                    src={'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-05/TASS_7803732.jpg?itok=6sNpt6vA'}/>
            </div>
            <div className={classes1.descriptionPost}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;