import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokeTypes, postPokemon } from '../redux/actions';
import NavBar from './NavBar'

export default function NewPokemon() {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.pokeTypes);

    const [input, setInput] = useState({
        name: '',
        types: [],
        img: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
    });

    useEffect(() => {
        dispatch(getPokeTypes())
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleSelect = (e) => {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    };

    const handleClick = (e) => {
        e.preventDefault();
        //console.log(input);
        dispatch(postPokemon(input));
        alert(`${input.name} created succesfully`);
        setInput({ name: '', types: [], img: '', hp: '', attack: '', defense: '', speed: '', height: '', weight: '' });
    }

    // const validate = () => {
    //     let errors = {};
    //     if (!input.name) {
    //         errors.name = 'Name required'
    //     } else if (!input.types) {
    //         errors.types = 'Types required'
    //     }

    //     if (input.attack > 100) {
    //         errors.attack = 'Must be equal or less than 100'
    //     }
    //     return errors
    // }

    return (
        <>
            <NavBar />
            <h1>Create your own Pokemon</h1>

            <form onSubmit={e => { handleClick(e) }}>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={input.name} onChange={e => handleChange(e)} />
                </div>

                <select onChange={e => { handleSelect(e) }}>
                    {types.map(t => (<option value={t.name} key={t.id}>{t.name}</option>))}
                </select>

                <ul><li>{input.types.map(t => `${t.toUpperCase()} `)}</li></ul>

                <div>
                    <label>Image</label>
                    <input type='text' name='img' value={input.img} onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label>HP</label>
                    <input type='number' name='hp' value={input.hp} onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label>Attack</label>
                    <input type='number' name='attack' value={input.attack} onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label>Defense</label>
                    <input type='number' name='defense' value={input.defense} onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label>Speed</label>
                    <input type='number' name='speed' value={input.speed} onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label>Height</label>
                    <input type='number' name='height' value={input.height} onChange={e => handleChange(e)} />
                </div>
                <div>
                    <label>Weight</label>
                    <input type='number' name='weight' value={input.weight} onChange={e => handleChange(e)} />
                </div>

                <button type='submit' >Create Pokemon</button>
            </form>

        </>
    )
}

