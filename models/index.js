const User = require('./User.js')
const Recipe = require('.Recipe.js')
const RecipeCreator = require('.RecipeCreator.js')
const Region = require('./Region.js/index.js')

User.hasMany(Recipe)
Recipe.belongsTo(User)

RecipeCreator.hasMany(Creator)
Recipe.belongsToMany(Recipe)

Recipe.hasMany(Region)
Region.belongsToMany(Recipe)

