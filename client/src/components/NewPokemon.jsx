import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { getPokeTypes, postPokemon } from '../redux/actions';
import NavBar from './NavBar'

const validate = (input) => {
    let errors = {};
    if (!input.name) {
        errors.name = 'Name required'
    } else if (!input.types) {
        errors.types = 'Types required'
    } else if (input.types.length > 2) {
        errors.types = "Two types maximmun"
    }
    else if (!input.img) {
        errors.img = 'Must attach an image'
    }
    else if (input.hp > 9999) {
        errors.hp = 'Maximum exceeded'
    } else if (input.hp <= 0) {
        errors.hp = 'Must be greater than zero'
    }
    else if (input.attack > 9999) {
        errors.attack = 'Maximum exceeded'
    } else if (input.attack <= 0) {
        errors.attack = 'Must be greater than zero'
    }
    else if (input.defense > 9999) {
        errors.defense = 'Maximum exceeded'
    } else if (input.defense <= 0) {
        errors.defense = 'Must be greater than zero'
    }
    else if (input.speed > 9999) {
        errors.speed = 'Maximum exceeded'
    } else if (input.speed <= 0) {
        errors.speed = 'Must be greater than zero'
    }
    else if (input.height > 999) {
        errors.height = 'Maximum exceeded'
    } else if (input.height <= 0) {
        errors.height = 'Must be greater than zero'
    }
    else if (input.weight > 9999) {
        errors.weight = 'Maximum exceeded'
    } else if (input.weight <= 0) {
        errors.weight = 'Must be greater than zero'
    }

    return errors
}


export default function NewPokemon() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.pokeTypes);
    const [errors, setErrors] = useState({});

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
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    const handleSelect = (e) => {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) alert(`Missing data`)
        else {
            dispatch(postPokemon(input));
            alert(`${input.name} created succesfully`);
            console.log(input)
            setInput({ name: '', types: [], img: '', hp: '', attack: '', defense: '', speed: '', height: '', weight: '' });
            history.push('/home');
        }
    }


    return (
        <>
            <Link to='/home'>
                <button >Home</button>
            </Link>
            <NavBar />
            <h1>Create your own Pokemon</h1>

            <form onSubmit={e => { handleSubmit(e) }}>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={input.name} onChange={e => handleChange(e)} />
                    {errors.name && (<h4>{errors.name}</h4>)}
                </div>

                <select onChange={e => { handleSelect(e) }}>
                    {types.map(t => (<option value={t.name} key={t.id}>{t.name}</option>))}
                </select>

                <ul><li>{input.types.map(t => `${t.toUpperCase()} `)}</li></ul>

                <div>
                    <label>Image</label>
                    <input type='text' name='img' value={input.img} onChange={e => handleChange(e)} />
                    {errors.img && (<h4>{errors.img}</h4>)}
                </div>

                <div>
                    <label>HP</label>
                    <input type='number' name='hp' value={input.hp} onChange={e => handleChange(e)} />
                    {errors.hp && (<h4>{errors.hp}</h4>)}
                </div>

                <div>
                    <label>Attack</label>
                    <input type='number' name='attack' value={input.attack} onChange={e => handleChange(e)} />
                    {errors.attack && (<h4>{errors.attack}</h4>)}
                </div>

                <div>
                    <label>Defense</label>
                    <input type='number' name='defense' value={input.defense} onChange={e => handleChange(e)} />
                    {errors.defense && (<h4>{errors.defense}</h4>)}
                </div>

                <div>
                    <label>Speed</label>
                    <input type='number' name='speed' value={input.speed} onChange={e => handleChange(e)} />
                    {errors.speed && (<h4>{errors.speed}</h4>)}
                </div>

                <div>
                    <label>Height</label>
                    <input type='number' name='height' value={input.height} onChange={e => handleChange(e)} />
                    {errors.height && (<h4>{errors.height}</h4>)}
                </div>
                <div>
                    <label>Weight</label>
                    <input type='number' name='weight' value={input.weight} onChange={e => handleChange(e)} />
                    {errors.weight && (<h4>{errors.weight}</h4>)}
                </div>

                <button type='submit' >Create Pokemon</button>
            </form>
        </>
    )
}

