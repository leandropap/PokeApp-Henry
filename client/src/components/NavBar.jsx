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
        console.log(pokeName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPokeByName(pokeName));
    }
    return (
        <div className={s.display}>
            <Link to='/home' >
                <button className={s.action_button}>Home</button>
            </Link>

            <input type='text' placeholder='Search any Pokemon'
                onChange={e => { handleInputChange(e) }} />
            <Link to='/detail'>
                <button type='submit' onClick={e => { handleSubmit(e) }}
                    className={s.action_button}
                > Catch'em ! </button>
            </Link>
        </div>
    )

};