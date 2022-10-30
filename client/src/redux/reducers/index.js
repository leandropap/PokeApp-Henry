import { GET_POKEMONS, GET_POKE_BY_NAME, GET_POKE_BY_ID, POST_POKEMON, GET_POKETYPES, FILTER_BY_TYPE, ORDER_BY_NAME, ORDER_BY_ATTACK, FILTER_BY_SOURCE, DELETE_POKEMON } from "../actions";

const initialState = {
    pokemons: [],
    allPokemons: [],
    pokeTypes: [],
    pokeDetail: [],
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
            pokemons: [action.payload]
        };
        case GET_POKE_BY_ID: return {
            ...state,
            pokeDetail: [action.payload]
        }
        case GET_POKETYPES: return {
            ...state,
            pokeTypes: action.payload,
        };
        case POST_POKEMON: return {
            ...state
        };
        case DELETE_POKEMON:
            return {
                ...state,
            };
        case FILTER_BY_TYPE:
            let typeFilter = []
            if (action.payload === 'all') {
                typeFilter = state.allPokemons
            } else {
                const allPokes = state.pokemons
                const filterDb = allPokes.filter(p => p.createdInDb).filter(p => (p.types[0].name === action.payload || (p.types[1] && p.types[1].name === action.payload)))
                const filterApi = allPokes.filter(p => (p.types[0] === action.payload || (p.types[1] && p.types[1] === action.payload)))
                typeFilter = filterApi.concat(filterDb)
            }
            return {
                ...state,
                pokemons: typeFilter
            };
        case FILTER_BY_SOURCE:
            let filterPokemons = state.allPokemons;
            let sourceFilter = []
            if (action.payload === 'all') sourceFilter = state.allPokemons;
            else if (action.payload === 'db') {
                sourceFilter = filterPokemons.filter(p => p.createdInDb)
            }
            else if (action.payload === 'api') sourceFilter = filterPokemons.filter(p => typeof p.id === 'number')
            return {
                ...state,
                pokemons: sourceFilter
            };

        case ORDER_BY_NAME:
            if (action.payload === 'none') return {
                ...state,
                pokemons: state.allPokemons
            }
            else {
                let sortedPokesAZ = action.payload === 'asc' ?
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
                    pokemons: sortedPokesAZ
                }
            };
        case ORDER_BY_ATTACK:
            if (action.payload === 'none') return {
                ...state,
                pokemons: state.allPokemons
            }
            else {
                let sortedPokesAT = action.payload === 'asc' ?
                    state.pokemons.sort(function (a, b) {
                        if (a.attack > b.attack) return 1;
                        if (b.attack > a.attack) return -1;
                        return 0;
                    }) :
                    state.pokemons.sort(function (a, b) {
                        if (a.attack > b.attack) return -1;
                        if (b.attack > a.attack) return 1;
                        return 0;
                    })
                return {
                    ...state,
                    pokemons: sortedPokesAT
                }
            };
        default: return state
    }
}

export default rootReducer