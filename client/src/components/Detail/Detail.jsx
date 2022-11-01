import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { deletePokemon, getPokeDetail } from "../../redux/actions";
import s from './Detail.module.css'
import NavBar from '../NavBar/NavBar'

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
        <div>
            <div>
                <Link to='/home'>
                    <button className={s.button}>Home</button>
                </Link>

                <NavBar />
            </div>
            <div className={s.detail}>
                {
                    pokeDetail.length ?
                        <div>
                            <h1 className={s.text}>{pokeDetail[0].name.toUpperCase()}</h1>

                            <div className={s.display}>
                                <div>
                                    <div className={s.image}>
                                        <img src={pokeDetail[0].img} alt="Not found" width="350px" />
                                    </div>
                                    <h3>
                                        <div className={s.types_display}>
                                            {
                                                pokeDetail[0].createdInDb ?
                                                    pokeDetail[0].types.map(t => (
                                                        <div className={s.types_border}>
                                                            <div className={`${s.type} ${s[t]}`}>
                                                                {t.name.toUpperCase()}
                                                            </div>
                                                        </div>)) :
                                                    pokeDetail[0].types.map(t => (
                                                        <div className={s.types_border}>
                                                            <div className={`${s.type} ${s[t]}`}>
                                                                {t.toUpperCase()}
                                                            </div>
                                                        </div>))
                                            }
                                        </div>
                                    </h3>
                                </div>

                                <ul className={s.stats}>
                                    <li>
                                        <h3>ATTACK {pokeDetail[0].attack}</h3>
                                    </li>
                                    <li>
                                        <h3>DEFENSE {pokeDetail[0].defense}</h3>
                                    </li>
                                    <li>
                                        <h3>HP {pokeDetail[0].hp}</h3>
                                    </li>
                                    <li>
                                        <h3>SPEED {pokeDetail[0].speed}</h3>
                                    </li>
                                    <li>
                                        <h3>HEIGHT {pokeDetail[0].height}</h3>
                                    </li>
                                    <li>
                                        <h3>WEIGHT {pokeDetail[0].weight}</h3>
                                    </li>

                                </ul>
                            </div>
                            {pokeDetail[0].createdInDb &&
                                <div>
                                    <button className={s.button} onClick={e => { handleDelete(e) }}>Delete</button>
                                </div>


                            }
                        </div>
                        : <h2>Loading...</h2>
                }
            </div>
        </div>
    )
}