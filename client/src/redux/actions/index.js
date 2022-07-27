import axios from 'axios';
// Aqui debo realizar la conexion entre el back end y el front end.
// De manera analoga a como lo haciamos en el M2, llamando a una api externa,
// en esta ocasion la ruta que nos dara los datos que mostramos en el front debe ser local.
// Esto es, llamar al directorio donde se encuentra nuestr back end.

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKE_BY_ID = 'GET_POKE_BY_ID';
export const POST_POKEMON = 'POST_POKEMON';
export const GET_POKETYPES = 'GET_POKETYPES';

//Action Creators
export const getPokemons = async () => {
    return async function (dispatch) {
        let pokemons = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
    }
}

export const getPokeTypes = async () => {
    return async function (dispatch) {
        let pokeTypes = await axios.get('http://localhost:3001/type');

        return dispatch({
            type: GET_POKETYPES,
            payload: pokeTypes.data
        });
    };
};

