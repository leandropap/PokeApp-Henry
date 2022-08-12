import React from "react";
import { Link } from 'react-router-dom';
import s from './Card.module.css';

export default function Card({ name, img, types, id }) {

    return (
        <div className={s.card} >
            <Link to={`/detail/${id}`}>
                <button> Detail</button>
            </Link>

            <div className={s.card_title}>
                <p>{name.toUpperCase()}</p>
                {
                    types.map(t => {
                        if (typeof t === 'object') return (<div> {t.name.toUpperCase()} </div>)
                        else return (
                            <div key={t}>
                                {t.toUpperCase()}
                            </div>
                        )
                    })
                }
            </div>
            <div className={s.card_image}>
                <img src={img} alt='Img not found' width='200px' />
            </div>
        </ div>
    )
}

