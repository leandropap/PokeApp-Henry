import React from "react";

export default function Filter() {
    return (
        <div>
            <select>
                <option value='asc'>Ascemding</option>
                <option value='desc'>Descemding</option>
            </select>
            <select>
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