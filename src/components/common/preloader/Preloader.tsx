import preloader from "../../../assets/imgs/2.gif";
import React from "react";
import s from './Preloader.module.css'

export function Preloader () {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}

