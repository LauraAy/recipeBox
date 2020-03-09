const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:Sab@13081978@localhost:3306/something_db')

module.exports = sequelize
