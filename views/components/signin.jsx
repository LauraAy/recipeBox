const React = require('react')

const signIn = props => {
  return (
    <center>
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
              <button class="uk-button uk-button-primary uk-button-small">Sign In</button>
            </p>

            <p uk-margin>
              <button class="uk-button uk-button-primary uk-button-small">Register</button>
            </p>


  </form>
  </center>
  )
}

module.exports = SignIn