import { GET_POKEMONS, GET_POKETYPES } from "../actions";

const initialState = {
    pokemons: [],
    pokeTypes: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS: return {
            ...state,
            pokemons: action.payload,
        };
        case GET_POKETYPES: return {
            ...state,
            pokeTypes: action.payload,
        }
        default: return state
    }
}

export default rootReducer