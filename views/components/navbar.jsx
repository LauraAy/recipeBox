const React = require('react')

const Navbar = props => {
  return (
    <nav class="uk-navbar-container uk-margin uk-navbar">
      <div class="uk-navbar-left">

      <a class="uk-navbar-item uk-logo" href="/"><img src="/" class="image"></a>

          <ul class="uk-navbar-nav">
            <li>
              <a href="index.html">
                <span class="uk-icon uk-margin-small-right" uk-icon="icon: home"></span>
              </a>
            </li>
          </ul>
          <ul class="uk-navbar-nav">
            <li>
              <a href="index.html">
                <span class="uk-icon uk-margin-small-right"></span>
                My Recipes
        </a>
            </li>
          </ul>
          <ul class="uk-navbar-nav">
            <li>
              <a href="index.html">
                <span class="uk-icon uk-margin-small-right"></span>
                Create Recipes
        </a>
            </li>
          </ul>
      </div>
    </nav>
  )
}
      
module.exports = Navbar