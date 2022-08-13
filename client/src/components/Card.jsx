import React from "react";
import s from './Card.module.css';

export default function Card({ name, img, types, id }) {

    return (
        <div className={s.card} >

            <div className={s.card_title}>
                <p>{name.toUpperCase()}</p>

                <div className={s.card_image}>
                    <a href={`/detail/${id}`}>
                        <img src={img} alt='Img not found' width='200px' />
                    </a>

                </div>

                <div className={s.card_types}>
                    {
                        types.map(t => {
                            if (typeof t === 'object') return (<div key={t.name}> {t.name.toUpperCase()} </div>)
                            else return (
                                <div key={t} className={s.card_type}>
                                    {t.toUpperCase()}
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </ div>
    )
}

