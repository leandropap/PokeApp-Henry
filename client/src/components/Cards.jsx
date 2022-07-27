import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from './Card'
import { getPokemons } from "../redux/actions";


export default function Cards() {
    const allPokes = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch]);


    return (
        allPokes?.map(poke => {
            return (
                <>
                    <Card
                        img={poke.img}
                        name={poke.name}
                        type={poke.type}
                    />
                </>
            )
        })
    )
}
