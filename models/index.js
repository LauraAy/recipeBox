//const User = require('./User.js')
//const Recipe = require('./Recipe.js')
//const RecipeCreator = require('./RecipeCreator.js')
const Region = require('./region.js')

//User.hasMany(Recipe)
//Recipe.belongsTo(User)

//Recipe.hasMany(Region)
//Region.belongsTo(Recipe)

//RecipeCreator.hasMany(Recipe)
//RecipeCreator.belongsTo(Recipe)
// Recipe.belongsToMany(RecipeCreator, { through: 'CreatorRecipe' })

module.exports = { Region}

