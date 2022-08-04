import React from "react";
import s from './Card.module.css'

function Card({ name, img, types, id }) {

    return (
        <div className={s.card}>
            <div className={s.card_title}>
                <p>{name.toUpperCase()}</p>
                <p>{types[0]} {types[1]}</p>
            </div>
            <div className={s.card_image}>
                <img src={img} alt='Img not found' width='200px' />
            </div>
        </ div>
    )
}

export default Card;