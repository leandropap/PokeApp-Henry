import React from "react";
import s from './Card.module.css'

export default function Card({ name, img, types, id }) {

    return (
        <div className={s.card}>
            <div className={s.card_title}>
                <p>{name.toUpperCase()}</p>
                {
                    types.map(t=>{
                        return(
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

