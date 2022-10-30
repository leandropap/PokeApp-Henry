const axios = require('axios');
const { Types } = require('../db')

const getPokeTypes = async (req, res) => {
    const pokeTypes = (await axios.get('https://pokeapi.co/api/v2/type')).data.results
        .map(t => t.name)
    const typesToDb = await pokeTypes.forEach(t => {
        Types.findOrCreate({
            where: { name: t }
        })
    });
    return pokeTypes
}

getPokeTypes();

module.exports = {
    getPokeTypes
}