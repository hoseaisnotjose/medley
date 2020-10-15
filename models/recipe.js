const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, default: none},
    servings: {type: String, default: 'Two'},
    preptime: {type: String, default: none},
    ingredients: {type: CharacterData, default: none},
    quantity: {type: String, default: none},
    author: {type: Schema.Types.ObjectId, ref: 'user'},
    likes: [{type: Schema.Types.ObjectId, ref: 'user'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'user'}],
},{
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);