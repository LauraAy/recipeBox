const router = require('express').Router()
const { User, Recipe, RecipeCreator, Region } = require("../models")

// Get all Recipes with User included
router.get('/recipes', (req, res) => Recipe.findAll({ include: [User, Region, RecipeCreator] })
  .then(users => res.json(users))
  .catch(e => console.error(e)))

// Get one Recipe with User included
router.get('/recipes/:title', (req, res) => Recipe.findOne({ where: { title: req.params.title }, include: [User, Region, RecipeCreator] })
  .then(user => res.json(user))
  .catch(e => console.error(e)))

// Create new Recipe
router.post('/recipes', (req, res) => Recipe.create(req.body)
  .then(() => res.sendStatus(200)
    .catch(e => console.error(e))))

router.delete('/recipes/:title', (req, res) => Recipe.destroy({ where: { title: req.params.title } })
  .then(user => res.json(user))
  .catch(e => console.error(e)))

module.exports = router