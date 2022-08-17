const { Router } = require('express');
const { getPokemonByName } = require('../controllers/getPokemonByName');
const { getPokemonDB } = require('../controllers/getPokemonByName');
const { getApiPokemons } = require('../controllers/getApiPokemons');
const { getPokeTypes } = require('../controllers/getPokeTypes');
const { Pokemon, Types } = require('../db');
const { Op } = require('sequelize');
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
            res.send(`${name} not found`);
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
router.post('/pokemons', async (req, res, next) => {
    const { name, hp, attack, defense, speed, height, weight, img } = req.body;
    const types = req.body.types
    if (!name || !types) return res.status(404).send('Missing data')
    try {
        const createdPoke = await Pokemon.create(req.body);
        console.log(types)
        const pokeType = await Types.findAll({
            where: { name: { [Op.or]: [types] } }
        });
        createdPoke.addTypes(pokeType);
        res.status(200).send('Pokemon created succesfully')
    } catch (error) {
        next(error)
    }

});

//DELETE POKEMONS
router.delete('/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    // console.log(id)
    try {
        let deletedPokemon = await Pokemon.findByPk(id)
        // console.log(deletedPokemon)
        await deletedPokemon.destroy()
        res.status(200).send('Pokemon deleted succesfully')
    } catch (error) {
        res.send(404).send(error)
    }
})

module.exports = router;
