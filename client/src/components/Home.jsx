import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../redux/actions';
import { Link } from 'react-router-dom'
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
    const currentPokes = allPokes.slice(firstPokeIndex, lastPokeIndex) //eslint-disable-next-line
    const [order, setOrder] = React.useState('')

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
            <Link to='/newpokemon'>
                <button className={s.action_button}>Create new Pokemon</button>
            </Link>
            <h1> Pokemon Web App</h1>

            <button onClick={e => { handleClick(e) }} className={s.action_button}>
                Reload Pokemons
            </button>
            <Filter
                setCurrentPage={setCurrentPage}
                setOrder={setOrder}
            />
            <Paginado
                allPokes={allPokes.length}
                pokesPerPage={pokesPerPage}
                paginado={paginado}
            />
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
                                attack={poke.attack}
                            />
                        )
                    })
                }
            </div >

        </>
    )
}