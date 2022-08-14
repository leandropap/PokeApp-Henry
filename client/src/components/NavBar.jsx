import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getPokeByName } from "../redux/actions";
import s from './NavBar.module.css'

export default function NavBar() {
    const [pokeName, setPokeName] = React.useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        e.preventDefault();
        setPokeName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPokeByName(pokeName));
    }


    return (
        <div className={s.display}>


            <div className={s.search}>
                <input type='text' placeholder='Search any Pokémon'
                    onChange={e => { handleInputChange(e) }} />
                <button type='submit' onClick={e => { handleSubmit(e) }} className={s.button} > Search </button>
            </div>


        </div>
    )

};