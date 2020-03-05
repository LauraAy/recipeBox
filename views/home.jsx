const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SignIn = require('./components/signin.jsx')

const Home = props => {
  return (
    <Html>
      <Navbar />
      <SignIn />
    </Html>
  )
}

module.exports = Home