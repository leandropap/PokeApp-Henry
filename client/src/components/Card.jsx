import React from "react";
// import { Link } from 'react-router-dom';

function Card({ name, img, types, id }) {

    return (
        <>
            <p>{name}</p>
            <p>Pokedex N° {id}</p>
            <img src={img} alt='Img not found' width='250px' />
            <p>{types}</p>
        </>
    )
}

export default Card;