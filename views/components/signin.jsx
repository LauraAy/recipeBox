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
        <p uk-margin>
          <a class="uk-button uk-button-default" href="#">Submit</a>
        </p>

  </form>
  )
}

module.exports = signIn