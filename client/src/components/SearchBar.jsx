import React from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../redux/actions";

export default function SearchBar() {
    const [pokeName, setPokeName] = React.useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        e.preventDefault();
        setPokeName(e.target.value);
        console.log(pokeName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPokeByName(pokeName));
    }

    return (
        <>
            <input type='text' placeholder='Search any Pokemon'
                onChange={e => { handleInputChange(e) }} />
            <button type='submit' onClick={e => { handleSubmit(e) }}> Catch'em ! </button>
        </>
    )
}
