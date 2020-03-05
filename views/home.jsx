const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SignIn = require('./components/signin.jsx')

const Home = props => {
  return (
    <Html>
      <Navbar />
      <div id="container">
        <div id="main-page" class="imgBackground">
            <img src="./assets/images/logo_mrb.png" class="image">
      </div>
        </div>
      <SignIn />
    </Html>
  )
}

module.exports = Home