const router = require('express').Router()
const { User, Recipe, RecipeCreator, Region } = require('../models')

// Get all Users with Recipes included
router.get('/users', (req, res) => User.findAll({ include: [Recipe]})
  .then(users => res.json (users))
  .catch(e => console.error (e)))

// Get one User with Recipes included
router.get('/users/:username', (req, res) => User.findOne({ where: { username: req.params.username}, include: [Recipe]})
  .then(user => res.json(user))
  .catch(e => console.error(e)))

// Create new User
router.post('/users', (req, res) => User.create(req.body)
  .then(() => res.sendStatus(200)
  .catch(e => console.error(e))))

module.exports = router