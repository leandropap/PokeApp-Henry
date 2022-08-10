import React from "react";
import s from './Card.module.css'

export default function Card({ name, img, types }) {

    return (
        <div className={s.card}>
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

