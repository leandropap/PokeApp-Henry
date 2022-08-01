import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokeByType, orderByName } from "../redux/actions";

export default function Filter() {
    const dispatch = useDispatch(); //eslint-disable-next-line
    const [currentPage, setCurrentPage] = React.useState(1); //eslint-disable-next-line
    const [order, setOrder] = useState('');

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
                <option value='all'>All</option>
                <option value='normal'>Normal</option>
                <option value='fighting'>Fighting</option>
                <option value='flying'>Flying</option>
                <option value='poison'>Poison</option>
                <option value='ground'>Ground</option>
                <option value='rock'>Rock</option>
                <option value='bug'>Bug</option>
                <option value='ghost'>Ghost</option>
                <option value='steel'>Steel</option>
                <option value='electric'>Electric</option>
                <option value='fire'>Fire</option>
                <option value='water'>Water</option>
                <option value='grass'>Grass</option>
                <option value='psychic'>Psychic</option>
                <option value='ice'>Ice</option>
                <option value='dragon'>Dragon</option>
                <option value='fairy'>Fairy</option>
                <option value='dark'>Dark</option>
                <option value='unknown'>Unknown</option>
                <option value='shadow'>Shadow</option>
            </select>
            <select>
                <option value='all'>All</option>
                <option value='api'>From API</option>
                <option value='db'>From DB</option>
            </select>
        </div>
    )
}