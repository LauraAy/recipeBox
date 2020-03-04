const express = require('express')
const { join } = require('path')
const app = express()

// app.use(express.static(join(dirname, 'public')))
// app.use(express.urlencoded({ extended: true}))
// app.use(express.json())

const { User, Recipe, RecipeCreator, Region} = require('./models')

require('./config').sync()
.then(() => app.listen(3000))
.catch(e => console.error(e))