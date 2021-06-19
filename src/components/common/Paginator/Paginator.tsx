import React from "react";
import s from "./Paginator.module.css";

export type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorType> = (props) => {

    const {totalUsersCount, pageSize, currentPage, onPageChanged} = props

    const pagesCount = Math.ceil(totalUsersCount/pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}

    return (
        <div>
            {pages.map(p => {
                return <span onClick={()=> onPageChanged(p)} className={currentPage === p ? s.currentPage : ''}>{p}</span>})
            })
        </div>
    )

}