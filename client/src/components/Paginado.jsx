import React from "react";

export default function Paginado({ allPokes, pokesPerPage, paginado }) {
    const pagenumbers = [];
    const round = Math.ceil(allPokes / pokesPerPage)

    for (let i = 1; i <= round; i++) {
        pagenumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pagenumbers && pagenumbers.map(n => {
                    return (
                        <li className="n" key={n} >
                            <a onClick={() => { paginado(n) }}> {n}</a>
                        </li>
                    )
                }
                )}
            </ul>
        </nav >
    )
}
