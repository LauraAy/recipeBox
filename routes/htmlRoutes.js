const path = require('path')
const router = require('express').Router()

router.get('/allrecipes', function (req, res) {
  res.sendFile(path.join(__dirname, ('../public/AllRecipes.html')))
})

module.exports = router