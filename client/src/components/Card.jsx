import React from "react";
import { Link } from 'react-router-dom';

function Card({ name, img, type }) {

    return (
        <>
            <img src={img} alt='Img not found' width='250px' />
            <p>{name}</p>
            <p>{type}</p>
        </>
    )
}

export default Card;