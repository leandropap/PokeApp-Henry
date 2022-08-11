import React from "react";

export default function Paginado({ allPokes, pokesPerPage, paginado, setCurrentPage }) {
    const pagenumbers = [];
    const round = Math.ceil(allPokes / pokesPerPage)

    for (let i = 1; i <= round; i++) {
        pagenumbers.push(i)
    }

    return (
        <nav>
            {pagenumbers && pagenumbers.map(n => {
                return (
                    <button className="n" key={n} >
                        <a onClick={() => { paginado(n) }}> {n}</a>
                    </button>
                )
            }
            )}
        </nav >
    )
}
