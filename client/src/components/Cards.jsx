import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../redux/actions";
import Card from './Card'
import Paginado from "./Paginado";
import Filter from "./Filter";

export default function Cards() {
    const allPokes = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = React.useState(1);   //eslint-disable-next-line
    const [pokesPerPage, setpokesPerPage] = React.useState(12);
    const lastPokeIndex = currentPage * pokesPerPage;
    const firstPokeIndex = lastPokeIndex - pokesPerPage;
    const currentPokes = allPokes.slice(firstPokeIndex, lastPokeIndex)  //eslint-disable-next-line

    const paginado = (currentPage) => {
        setCurrentPage(currentPage)
    }

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch]);


    return (
        <>
            <Filter />
            <Paginado
                allPokes={allPokes.length}
                pokesPerPage={pokesPerPage}
                paginado={paginado}
            >
            </Paginado>
            {
                currentPokes?.map(poke => {
                    return (

                        <Card
                            key={poke.id}
                            id={poke.id}
                            img={poke.img}
                            name={poke.name}
                            types={poke.types}
                        />
                    )
                })
            }

        </>
    )
}
