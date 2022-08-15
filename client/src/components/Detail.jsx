import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { deletePokemon, getPokeDetail } from "../redux/actions";
import s from './Detail.module.css'

export default function Detail(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const pokeDetail = useSelector((state) => state.pokeDetail)


    React.useEffect(() => {
        dispatch(getPokeDetail(props.match.params.id))
    }, [props.match.params.id, dispatch]);

    const handleDelete = (e) => {
        e.preventDefault();
        const id = pokeDetail[0].id;
        dispatch(deletePokemon(id));
        alert('Deleted sucessfully');
        history.push('/home');
    }

    return (
        <>
            <Link to='/home'>
                <button className={s.button}>Home</button>
            </Link>
            <div className={s.detail}>
                {
                    pokeDetail.length ?
                        <div>
                            <h1 className={s.text}>{pokeDetail[0].name.toUpperCase()}</h1>

                            <div className={s.display}>
                                <div>
                                    <img src={pokeDetail[0].img} alt="Not found" width="300px" />
                                </div>
                                <div>
                                    <div>
                                        <h3>TYPES: {pokeDetail[0].createdInDb ? pokeDetail[0].types.map(t => t.name.toUpperCase() + ' / ') : pokeDetail[0].types.map(t => t.toUpperCase() + ' / ')}</h3>
                                    </div>
                                    <div>
                                        <h3>ATTACK: {pokeDetail[0].attack}</h3>
                                        <h3>DEFENSE: {pokeDetail[0].defense}</h3>
                                    </div>
                                    <div>
                                        <h3>HP: {pokeDetail[0].hp}</h3>
                                        <h3>SPEED: {pokeDetail[0].speed}</h3>
                                    </div>

                                    <div>
                                        <h3>HEIGHT: {pokeDetail[0].height}</h3>
                                        <h3>WEIGHT: {pokeDetail[0].weight}</h3>
                                    </div>

                                </div>
                            </div>
                            {pokeDetail[0].id.length === 36 ?
                                <div>
                                    <button className={s.button} onClick={e => { handleDelete(e) }}>Delete</button>
                                </div>
                                : null

                            }
                        </div>
                        : <h2>Loading...</h2>
                }
            </div>
        </>
    )
}