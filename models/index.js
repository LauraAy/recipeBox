const User = require('./User.js')
const Recipe = require('./Recipe.js')
const RecipeCreator = require('./RecipeCreator.js')
const Region = require('./Region.js')

User.hasMany(Recipe)
Recipe.belongsTo(User)

RecipeCreator.hasMany(Recipe)
Recipe.belongsToMany(RecipeCreator, { through: 'CreatorRecipe' })

Recipe.hasMany(Region)
Region.belongsToMany(Recipe, { through: 'RecipeRegion' })

// Region.getRecipes()
// let region = Region.build({
//   regionName: 'California',
//   lat: 1,
//   long: 1
// })

// region.save()

module.exports = { User, Recipe, RecipeCreator, Region}

