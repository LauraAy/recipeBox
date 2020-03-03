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
    </form>
  )
}

module.exports = signIn