const { Router } = require('express');
const { getPokemonByName } = require('../controllers/getPokemonByName');
const { getPokemonDB } = require('../controllers/getPokemonByName');
const { getApiPokemons } = require('../controllers/getApiPokemons');
const { getPokeTypes } = require('../controllers/getPokeTypes');
const { Pokemon, Types } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Landing Page
// RESOLVER DESDE EL FRONT
router.get('/', (req, res) => {
    res.send('Landing page');
})


// GET ALL POKEMONS - GET POKEMON BY QUERY
//Devuelve Poke buscado por query
// Si no hubiera query, devuelve todos los pokemons
// FALTA MOSTRAR POKEMONS CREADOS EN DB EN EL LISTADO 
router.get('/pokemons', async (req, res) => {
    let { name } = req.query;
    if (name) {
        name = name.toLowerCase();
        const DBPokemon = await Pokemon.findOne({
            where: { name },
            include: {
                model: Types,
                attributes: ['name'],
                through: { attributes: [] },
            },
        });
        if (DBPokemon) return res.send(DBPokemon);

        try {
            const apiPokemon = await getPokemonByName(name);
            res.send(apiPokemon);
        } catch (error) {
            res.status(404).send('Pokemon not found');
        };
    }
    else {
        const allApiPokes = await getApiPokemons();
        const allDbPokes = await getPokemonDB();
        const allPokes = allApiPokes.concat(allDbPokes);
        return res.send(allPokes);
    }
});

//GET POKEMONS BY PARAMS
//Busca pokes pasados como params, sea por su ID o nombre.
//Para la DB usamos Id tipo UUID que es alfanumerica de 36 char.
//FALTA RESOLVER QUE DEVUELVA DESDE DB PASANDO NOMBRE
router.get('/pokemons/:id', async (req, res) => {
    let { id } = req.params;
    if (id.length === 36) {
        const DBPokemon = await Pokemon.findOne({
            where: { id },
            include: {
                model: Types,
                attributes: ['name'],
                through: { attributes: [] },
            },
        });
        if (DBPokemon) return res.send(DBPokemon);
        else return res.status(404).send('Pokemon not found');
    }
    id = id.toLowerCase();
    try {
        const ApiPokeName = await getPokemonByName(id);
        res.send(ApiPokeName);
    } catch (error) {
        res.status(404).send('Pokemon not found');
    }
});

router.get('/type', async (req, res) => {
    const pokeTypesDB = await Types.findAll({});
    if (pokeTypesDB) return res.send(pokeTypesDB);

    const pokeTypes = await getPokeTypes();
    res.send(pokeTypes);
});


//POST POKEMONS
//Pasamos data por body y hace post de un nuevo pokemon hacia nuestra DB
// POR QUE NO FUNCIONAAAAAAAAAAAAA
router.post('/pokemons', async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, createdInDb, type } = req.body;
    const createdPoke = await Pokemon.create({ name, hp, attack, defense, speed, height, weight, createdInDb });
    const pokeType = await Types.findAll({
        where: { name: type }
    });
    createdPoke.addType(pokeType);
    res.send('Pokemon created succesfully')
});

module.exports = router;
