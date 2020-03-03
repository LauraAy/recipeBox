const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const signIn = require('./components/signin.jsx')

const Home = props => {
  return (
    <Html>
      <Navbar />
    </Html>
  )
}

module.exports = Home