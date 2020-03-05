const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SignIn = require('./components/signin.jsx')

const Home = props => {
  return (
    <Html>
      <Navbar />
      <div id="container">
            <img src="./assets/images/logo_mrb.png" class="image">
      </div>
      <SignIn />
    </Html>
  )
}

module.exports = Home