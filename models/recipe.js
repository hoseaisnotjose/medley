const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    servings: {type: String, default: 'Two'},
    preptime: {type: String},
    ingredients: {type: String},
    instructions: {type: String},
    owner: {type: Number, default: 0},
    likes: [{type: Schema.Types.ObjectId, ref: 'user'}]
},{
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);