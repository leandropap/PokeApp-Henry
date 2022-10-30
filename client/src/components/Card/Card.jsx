import React from "react";
import s from './Card.module.css';

export default function Card({ name, img, types, id }) {

    return (
        <div className={s.card} >

            <div className={s.title_border}>
                <div className={s.card_title}>
                    <p>{name.toUpperCase()}</p>
                </div>
            </div>
            <div>
                <div className={s.card_image}>
                    <a href={`/detail/${id}`}>
                        <img src={img} alt='Img not found' width='240px' />
                    </a>

                </div>

                <div className={s.card_types}>
                    {
                        types.map(t => {
                            if (typeof t === 'object') return (
                                <div className={s.types_border}>
                                    <div className={`${s.type} ${s[t.name]}`}>
                                        <div key={t.name} className={s.card_type}> {t.name.toUpperCase()
                                        }
                                        </div>
                                    </div>
                                </div>)
                            else return (
                                <div className={s.types_border} >
                                    <div key={t} className={s.card_type}>
                                        <div className={`${s.type} ${s[t]}`} margin='5px'>
                                            {t.toUpperCase()}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </ div >
    )
}

