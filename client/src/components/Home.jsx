import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getPokemons } from '../redux/actions';
import NavBar from './NavBar'

export default function Home() {

    const dispatch = useDispatch();
    const allPokes = useSelector((state) => state.pokemons);


    useEffect(() => {
        dispatch(getPokemons());
    });

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <>
            < div >
                <NavBar />
                <h1> Pokemon Web App</h1>
                <button onClick={e => { handleClick(e) }}>
                    Reload Pokemons
                </button>
            </div >
        </>
    )
}