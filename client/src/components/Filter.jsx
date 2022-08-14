import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPokeBySource, filterPokeByType, orderByAttack, orderByName } from "../redux/actions";
import { getPokeTypes } from "../redux/actions";
import s from './Filter.module.css'

export default function Filter({ setCurrentPage, setOrder }) {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.pokeTypes);

    React.useEffect(() => {
        dispatch(getPokeTypes())
    }, [dispatch]);

    const handleFilterPokeByType = (e) => {
        e.preventDefault();
        dispatch(filterPokeByType(e.target.value))
    }

    const handleFilterPokeBySource = (e) => {
        e.preventDefault();
        dispatch(filterPokeBySource(e.target.value))
    }

    const handleSortAZ = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordering A-Z< ${e.target.value}`)
    }

    const handleSortAT = (e) => {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordering a-Z< ${e.target.value}`)
    }

    return (
        <div className={s.display}>
            <div>
                <div>
                    <label>Sort by Name</label>
                    <select onChange={e => { handleSortAZ(e) }}>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>

                <div>
                    <label>Sort by attack</label>
                    <select onChange={e => { handleSortAT(e) }}>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>
            </div>

            <div>
                <div>
                    <label>Filter by type</label>
                    <select onChange={e => handleFilterPokeByType(e)}>
                        <option value='all' key='0'>all</option>
                        {types.map(t => (<option value={t.name} key={t.id}> {t.name} </option>))}
                    </select>
                </div>

                <div>
                    <label>Filter by source</label>
                    <select onChange={e => handleFilterPokeBySource(e)}>
                        <option value='all'>All</option>
                        <option value='api'>From API</option>
                        <option value='db'>From DB</option>
                    </select>
                </div>
            </div>

        </div>
    )
}