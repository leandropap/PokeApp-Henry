import React from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../redux/actions';
import NavBar from './NavBar'
import Filter from './Filter'
import Cards from './Cards'

export default function Home() {

    const dispatch = useDispatch();



    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <>
            <NavBar />
            <h1> Welcome</h1>
            <h1> Pokemon Web App</h1>

            <button onClick={e => { handleClick(e) }}>
                Reload Pokemons
            </button>
            <Filter />
            <Cards />
        </>
    )
}