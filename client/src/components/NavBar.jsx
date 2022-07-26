import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

export default function NavBar() {

    return (
        <>
            <SearchBar />
            Pokemon Web App
            <button>
                Create Pokemon
            </button>
        </>
    )

};