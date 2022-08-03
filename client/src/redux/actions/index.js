import axios from 'axios';
// Aqui debo realizar la conexion entre el back end y el front end.
// De manera analoga a como lo haciamos en el M2, llamando a una api externa,
// en esta ocasion la ruta que nos dara los datos que mostramos en el front debe ser local.
// Esto es, llamar al directorio donde se encuentra nuestr back end.

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKE_BY_NAME = 'GET_POKE_BY_NAME';
export const POST_POKEMON = 'POST_POKEMON';
export const GET_POKETYPES = 'GET_POKETYPES';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';

//Action Creators
export const getPokemons = () => {
    return async function (dispatch) {
        let pokemons = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
    }
};

export const getPokeByName = (name) => {
    return async function (dispatch) {
        try {
            let pokeName = await axios.get(`http://localhost:3001/pokemons?name=${name}`);

            return dispatch({
                type: GET_POKE_BY_NAME,
                payload: pokeName.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export const getPokeTypes = () => {
    return async function (dispatch) {
        let pokeTypes = await axios.get('http://localhost:3001/type');

        return dispatch({
            type: GET_POKETYPES,
            payload: pokeTypes.data
        });
    };
};

export const filterPokeByType = (payload) => {
    console.log(payload)
    return ({
        type: FILTER_BY_TYPE,
        payload
    })
};

export const orderByName = (payload) => {
    return ({
        type: ORDER_BY_NAME,
        payload
    })
}