import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../redux/actions';
import NavBar from './NavBar'
import Cards from './Cards'


export default function Home() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <>
            <NavBar />
            <h1> Pokemon Web App</h1>

            <button onClick={e => { handleClick(e) }}>
                Reload Pokemons
            </button>
            <Cards />
        </>
    )
}