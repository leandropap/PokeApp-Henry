import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css'

export default function Landing() {
    return (
        <div className={s.display}>

            <div className={s.left}>
                <div className={s.pokeball}>
                    <div className={s.pokeball_top}>
                        <div className={s.pokeball_center}></div>
                    </div>
                </div>
            </div>

            <div className={s.image}>

                <a href="/home">
                    <img src="https://i.imgur.com/WBgyfbD.png" alt="Not Found" width="450px" />
                </a>

                <hr />

                <hr />
                <p>
                    <h2>Powered by React-Redux / Node-JS </h2>
                    <div>
                        <img src="https://i.imgur.com/N13thdT.png" alt="Not found" width="140px" className={s.img} />
                        <img src="https://i.imgur.com/Huucvso.png" alt="Not found" width="200px" className={s.img} />
                    </div>

                </p>
            </div>

        </div >
    )
};

