const React = require('react')

const Navbar = props => {
  return (
    <nav class="uk-navbar uk-padding-small">
      <div class="uk-navbar-left">
        <a href="#offcanvas-slide" class="uk-button uk-button-default" uk-toggle><span uk-navbar-toggle-icon></span><span
          class="uk-margin-small-left"></span></a>

        <div id="offcanvas-slide" uk-offcanvas>
          <div class="uk-offcanvas-bar">

            <ul class="uk-nav uk-nav-default uk-margin">
              <a href="#">
                <span class="uk-icon uk-margin-small-right" uk-icon="icon: home"></span></a>
              <li><a href="#">My Recipes</a></li>
              <hr class="uk-divider-icon">
                <li class="uk-nav-header">Explore</li>
                <li><a href="#">All Recipes</a></li>
                <li><a href="#">Region</a></li>
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