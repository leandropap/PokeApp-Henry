import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../redux/actions';
import NavBar from './NavBar'
import Filter from './Filter'
import Paginado from './Paginado'
import Card from './Card'
import s from './Home.module.css'


export default function Home() {
    const dispatch = useDispatch();
    const allPokes = useSelector((state) => state.pokemons);
    const [currentPage, setCurrentPage] = React.useState(1);   //eslint-disable-next-line
    const [pokesPerPage, setpokesPerPage] = React.useState(12);
    const lastPokeIndex = currentPage * pokesPerPage;
    const firstPokeIndex = lastPokeIndex - pokesPerPage;
    const currentPokes = allPokes.slice(firstPokeIndex, lastPokeIndex)

    const paginado = (currentPage) => {
        setCurrentPage(currentPage)
    }

    React.useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <>
            <NavBar />
            <h1> Pokemon Web App</h1>

            <button onClick={e => { handleClick(e) }} className={s.action_button}>
                Reload Pokemons
            </button>
            <Filter />
            <Paginado
                allPokes={allPokes.length}
                pokesPerPage={pokesPerPage}
                paginado={paginado}
            >
            </Paginado>
            <div className={s.cards_list}>
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
            </div >

        </>
    )
}