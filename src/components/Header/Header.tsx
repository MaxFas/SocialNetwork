import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string|null
}

function Header(props: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <img src={'https://st.depositphotos.com/1906135/2172/i/600/depositphotos_21724471-stock-photo-cross-abstract.jpg'}/>
            <div className={classes.loginBlock}>{props.isAuth? props.login:
                <NavLink to={'/login'}>Login</NavLink>
           } </div>
        </header>
    )
}

export default Header;