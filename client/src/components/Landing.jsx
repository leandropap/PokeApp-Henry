import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css'

export default function Landing() {
    return (
        <div className={s.display}>
            <a href="/home">
                <img src="https://i.imgur.com/WBgyfbD.png" alt="Not Found" width="450px" />
            </a>

            <hr />

            <div>
                <Link to='/home'>
                    <button className={s.button}>Gotta catch'em all!</button>
                </Link>
            </div>

            <hr />
            <p>
                <h2>Powered by React-Redux / Node-JS </h2>
                <div>
                    <img src="https://i.imgur.com/N13thdT.png" alt="Not found" width="140px" className={s.img} />
                    <img src="https://i.imgur.com/Huucvso.png" alt="Not found" width="200px" className={s.img} />
                </div>

            </p>

        </div>
    )
};

