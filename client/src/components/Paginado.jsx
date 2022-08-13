import React from "react";
import s from './Paginado.module.css'

export default function Paginado({ allPokes, pokesPerPage, paginado }) {
    const pagenumbers = [];
    const round = Math.ceil(allPokes / pokesPerPage)

    for (let i = 1; i <= round; i++) {
        pagenumbers.push(i)
    }

    return (
        <nav className={s.display}>
            {pagenumbers && pagenumbers.map(n => {
                return (
                    <button className={s.button} key={n} >
                        <a onClick={() => { paginado(n) }}> {n}</a>
                    </button>
                )
            }
            )}
        </nav >
    )
}
