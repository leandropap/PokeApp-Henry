import React from "react";

export default function Detail({ id, name, img, types, hp, attack, defense, height, weight }) {
    return (
        <>
            <h1>Detalle</h1>
            <p>{name.toUpperCase()}</p>
            <p>Pokedex N° {id}</p>
            <p>{types[0]}</p>
            <p>{types[1]}</p>
            <img src={img} alt='Img not found' width='250px' />
            <p>{hp}</p>
            <p>{attack}</p>
            <p>{defense}</p>
            <p>{height}</p>
            <p>{weight}</p>
        </>
    )
}