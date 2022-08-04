import { GET_POKEMONS, GET_POKE_BY_NAME, GET_POKETYPES, FILTER_BY_TYPE, ORDER_BY_NAME } from "../actions";

const initialState = {
    pokemons: [],
    allPokemons: [],
    pokeTypes: [],

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS: return {
            ...state,
            pokemons: action.payload,
            allPokemons: action.payload
        };
        case GET_POKE_BY_NAME: return {
            ...state,
            pokemons: action.payload
        };
        case GET_POKETYPES: return {
            ...state,
            pokeTypes: action.payload,
        };
        case FILTER_BY_TYPE:
            const allPokes = state.pokemons;
            const typeFilter = action.payload === 'all' ?
                state.allPokemons :
                allPokes.filter(p => (p.types[0] === action.payload || (p.types[1] && p.types[1]===action.payload)))
            return {
                ...state,
                pokemons: typeFilter
            };
        case ORDER_BY_NAME:
            if (action.payload === 'none') return {
                ...state,
                pokemons: state.allPokemons
            }
            else {
                let sortedPokes = action.payload === 'asc' ?
                    state.pokemons.sort(function (a, b) {
                        if (a.name > b.name) return 1;
                        if (b.name > a.name) return -1;
                        return 0;
                    }) :
                    state.pokemons.sort(function (a, b) {
                        if (a.name > b.name) return -1;
                        if (b.name > a.name) return 1;
                        return 0;
                    })
                return {
                    ...state,
                    pokemons: sortedPokes
                }
            };

        default: return state
    }
}

export default rootReducer