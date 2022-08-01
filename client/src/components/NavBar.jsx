import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <>
            <SearchBar />
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </>
    )

};