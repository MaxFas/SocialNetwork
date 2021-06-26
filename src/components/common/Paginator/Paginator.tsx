import React, {useState} from "react";
import s from "./Paginator.module.css";
import {store} from "../../../redux/redux-store";

export type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorType> = (props) => {

    const {totalUsersCount, pageSize, currentPage, onPageChanged} = props

    let portionSize = 25

    const pagesCount = Math.ceil(totalUsersCount/pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    //@ts-ignore
    window.portionNumber = portionNumber

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.container}>
            <button disabled={portionNumber <= 1} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return <span key={p} onClick={(e)=> onPageChanged(p)} className={currentPage === p ? s.currentPage : s.page}>{p}</span>})
            }
            <button disabled={portionCount <= portionNumber} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
        </div>
    )

}





