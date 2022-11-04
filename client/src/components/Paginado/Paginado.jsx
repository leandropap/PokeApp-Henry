import React from "react";
import s from './Paginado.module.css'

export default function Paginado({ allPokes, pokesPerPage, paginado, handlePrevious, handleNext, currentPage }) {
    const pagenumbers = [];
    const round = Math.ceil(allPokes / pokesPerPage)

    for (let i = 1; i <= round; i++) {
        pagenumbers.push(i)
    }

    return (
        <nav className={s.display}>
            <button className={s.button} onClick={(e) => handlePrevious(e, currentPage)} > ◀ </button>

            {pagenumbers && pagenumbers.map(n => {
                return (
                    <button className={s.button} key={n} onClick={() => { paginado(n) }}>
                        <a> {n}</a>
                    </button>
                )
            }
            )}

            <button className={s.button} onClick={(e) => handleNext(e, currentPage)} > ▶ </button>
        </nav >
    )
}
