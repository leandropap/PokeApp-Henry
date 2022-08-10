const axios = require('axios');

const getApiPokemons = async () => {
    const apiPokes = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data;
    const apiPokes2 = (await axios.get(`${apiPokes.next}`)).data.results;

    const allPokes = apiPokes.results.concat(apiPokes2);
    // console.log(allPokes);

    for (let poke of allPokes) {
        const pokeUrl = await axios.get(`${poke.url}`)
        poke.id = pokeUrl.data.id;
        poke.img = pokeUrl.data.sprites['other']['official-artwork']['front_default']
        poke.types = pokeUrl.data.types.map(t => t.type.name)
        poke.attack = pokeUrl.data.stats[1]['base_stat']
    };
    // console.log(allPokes);
    return allPokes;
};
// getApiPokemons();

module.exports = {
    getApiPokemons
};