import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { getPokeDetail } from "../redux/actions";
import s from './Detail.module.css'

export default function Detail(props) {
    const dispatch = useDispatch();
    const pokeDetail = useSelector((state) => state.pokeDetail)

    React.useEffect(() => {
        dispatch(getPokeDetail(props.match.params.id))
    }, [props.match.params.id, dispatch]);

    return (
        <>
            <Link to='/home'>
                <button className={s.button}>Home</button>
            </Link>
            <div className={s.detail}>
                {
                    pokeDetail.length ?
                        <div>
                            <h2>{pokeDetail[0].name.toUpperCase()}</h2>
                            <img src={pokeDetail[0].img} alt="Not found" width="300px" />
                            <p>{pokeDetail[0].createdInDb ? pokeDetail[0].types.map(t => t.name.toUpperCase() + ' ') : pokeDetail[0].types.map(t => t.toUpperCase() + ' ')}</p>
                            <p>HP: {pokeDetail[0].hp}</p>
                            <p>ATTACK: {pokeDetail[0].attack}</p>
                            <p>DEFENSE: {pokeDetail[0].defense}</p>
                            <p>SPEED: {pokeDetail[0].speed}</p>
                            <p>HEIGHT: {pokeDetail[0].height}</p>
                            <p>WEIGHT: {pokeDetail[0].weight}</p>
                        </div>
                        : <h2>Loading...</h2>
                }
            </div>
        </>
    )
}