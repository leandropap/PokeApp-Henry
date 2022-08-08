import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPokeByType, orderByName } from "../redux/actions";
import { getPokeTypes } from "../redux/actions";

export default function Filter() {
    const dispatch = useDispatch(); //eslint-disable-next-line
    const [currentPage, setCurrentPage] = React.useState(1); //eslint-disable-next-line
    const [order, setOrder] = useState('');
    const types = useSelector((state) => state.pokeTypes);

    React.useEffect(() => {
        dispatch(getPokeTypes())
    }, [dispatch]);

    const handleFilterPokeByType = (e) => {
        e.preventDefault();
        dispatch(filterPokeByType(e.target.value))
    }

    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordering`)
    }

    return (
        <div>
            <select onChange={e => { handleSort(e) }}>
                <option value='none'>None</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descemding</option>
            </select>
            <select onChange={e => handleFilterPokeByType(e)}>
                <option value='all' key='0'>all</option>
                {types.map(t => (<option value={t.name} key={t.id}> {t.name} </option>))}
            </select>
            <select>
                <option value='all'>All</option>
                <option value='api'>From API</option>
                <option value='db'>From DB</option>
            </select>
        </div>
    )
}