import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../redux/actions';
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Filter from '../Filter/Filter'
import Paginado from '../Paginado/Paginado'
import Card from '../Card/Card'
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

    function handleNext(e, number) {
        e.preventDefault();
        const pages = Math.ceil(allPokes.length / pokesPerPage);
        if (currentPage !== pages) {
            setCurrentPage(number + 1)
        };
    };

    function handlePrevious(e, number) {
        e.preventDefault();
        const pages = Math.ceil(allPokes.length / pokesPerPage);
        if (currentPage !== 1) {
            setCurrentPage(number - 1)
        };
    };


    React.useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <div className={s.display}>

            <div className={s.navContainer}>
                <div className={s.button_list}>
                    <div>
                        <Link to='/newpokemon'>
                            <button className={s.button}> Create </button>
                        </Link>
                        <button onClick={e => { handleClick(e) }} className={s.button}> Reload </button>
                    </div>

                    <Filter
                        setCurrentPage={setCurrentPage}
                        setOrder={setOrder}
                    />
                    <NavBar />
                </div>

                <br />

                <Paginado
                    allPokes={allPokes.length}
                    pokesPerPage={pokesPerPage}
                    paginado={paginado}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    currentPage={currentPage}
                />
            </div>


            {typeof currentPokes[0] === 'string' ?
                <div className={s.cards_list}>
                    <h1> {currentPokes[0]} </h1>
                </div> : <div className={s.cards_list}>
                    {
                        currentPokes.map(poke => {
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
                </div >}

        </div>
    )
}