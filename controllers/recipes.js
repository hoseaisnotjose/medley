const recipe = require('../../models/recipe');
// const { deleteOne } = require('../models/user');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};

async function index(req, res) {
    const recipes = await recipe.find({});
    res.status(200).json(recipes);
}

async function create (req, res) {
    const recipe = await recipe.create(req.body);
    res.status(201).json(recipe);
}

async function show (req, res) {
    const recipe = await recipe.findById(req.params.id);
    res.status(200).json(recipe);
}

async function update(req, res) {
    const updatedRecipe = await recipe.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedRecipe);
}

async function deleteOne (req, res) {
    const deletedRecipe = await recipe.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedRecipe);
}

