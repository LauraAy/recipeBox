const { Model, STRING, INTEGER, TEXT } = require('sequelize')

class Recipe extends Model { }

Recipe.init({
  title: {
    type: STRING,
    allowNull: false
  },
  creatorName: {
    type: STRING,
    allowNull: true
  },
  aboutCreator: {
    type: STRING(1000),
    allowNull: true
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