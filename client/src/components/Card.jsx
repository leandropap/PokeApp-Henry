import React from "react";
// import { Link } from 'react-router-dom';

function Card({ name, img, types, id }) {

    return (
        <>
            <p>{name.toUpperCase()}</p>
            <p>Pokedex N° {id}</p>
            <p>{types[0]}</p>
            <p>{types[1]}</p>
            <img src={img} alt='Img not found' width='250px' />

        </>
    )
}

export default Card;