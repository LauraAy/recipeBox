const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const MyRecipes = require('./components/MyRecipes.jsx')
const AllRecipes = require('./components/AllRecipes.jsx')
const MapInfo = require('./components/MapInfo.jsx')

const RecipePage = props => {
  return (
    <Html>
      <Navbar />
      <div id="container">
            <img src="./assets/images/logo_mrb.png" class="image">
      </div>
      <hr class="uk-divider-icon" />
      <MyRecipes />
      <hr class="uk-divider-icon" />
      <AllRecipes />
      <hr class="uk-divider-icon" />
      <MapInfo />
    </Html>
  )
}

module.exports = RecipePage