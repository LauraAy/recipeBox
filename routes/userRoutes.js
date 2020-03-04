const { User, Recipe, RecipeCreator, Region } = require('./models')

app.get('/users', (req, res) => User.findAll())