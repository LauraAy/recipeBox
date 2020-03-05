const React = require('react')

const signIn = props => {
  return (
    <form>

      <div class="uk-margin">
        <div class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: user"></span>
          <input class="uk-input" type="text" placeholder="Email">
      </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline">
            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input class="uk-input" type="text" placeholder="Password">
      </div>
          </div>

          <p uk-margin>
            <a class="uk-button uk-button-default" href="#">Sign In</a>
          </p>
          <p uk-margin>
            <a class="uk-button uk-button-default" href="#">Register</a>
          </p>


  </form>
  )
}

module.exports = SignIn