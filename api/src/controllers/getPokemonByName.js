const axios = require('axios');
const { Pokemon, Types } = require('../db')

const getPokemonByName = async (name) => {
    const apiData = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
    const pokemon = {
        id: apiData.id,
        name: apiData.name,
        img: apiData.sprites['other']['official-artwork']['front_default'],
        types: apiData.types.map(t => t.type.name),
        hp: apiData.stats[0]['base_stat'],
        attack: apiData.stats[1]['base_stat'],
        defense: apiData.stats[2]['base_stat'],
        speed: apiData.stats[5]['base_stat'],
        height: apiData.height,
        weight: apiData.weight,
    };
    // console.log(pokemon)
    return pokemon;
};
// getPokemonByName('mewtwo')

const getPokemonDB = async () => {
    return await Pokemon.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            through: { attributes: [] },
        },
    });
};
// getDBInfo();

const getAllPokeNames = async () => {
    const apiPokemon = await getPokemonByName();
    const DBPokemon = await getPokemonDB();
    const allPokes = apiPokemon.concat(DBPokemon);
    return allPokes
}

module.exports = {
    getPokemonByName,
    getPokemonDB,
    getAllPokeNames,
};