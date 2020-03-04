const { Model, STRING, INTEGER} = require('sequelize')

class Recipe extends Model { }

Recipe.init({
  title: {
    type: STRING,
    allowNull: false
  },
  recipeType: {
    type: STRING,
    allowNull: false
  },
  servingSize: {
    type: INTEGER,
    allowNull: true,
  },
  recipeText: {
    type: TEXT,
    allowNull: false
  }
}, { sequelize: require('../config'), modelName: 'Recipe' })

module.exports = Recipe