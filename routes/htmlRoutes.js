const path = require('path')
const router = require('express').Router()

router.get('/allrecipes', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/allRecipes.html')))
})

router.get('/createrecipe', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/createRecipe.html')))
})

module.exports = router