const React = require('react')

const Navbar = props => {
  return (
    <nav class="uk-navbar uk-navbar-container uk-background-muted uk-padding-small">
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
                <li><a href="#">Category</a></li>
                <li><a href="#">Region</a></li>
          </ul>
        </div>
          </div>
        </div>
  </nav>
  )
}
      
module.exports = Navbar