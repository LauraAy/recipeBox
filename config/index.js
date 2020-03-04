const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:@localhost:3306/recipe_db')

module.exports = sequelize