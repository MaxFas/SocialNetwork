import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string|null
    logout: () => void
}

function Header(props: HeaderPropsType) {
    return (
        <header className={classes.header}>
            <img src={'https://ru.react.js.org/logo-og.png'}/>
            <div className={classes.loginBlock}>{props.isAuth? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>:
                <NavLink to={'/Login'}>Login</NavLink>
           } </div>
        </header>
    )
}

export default Header;