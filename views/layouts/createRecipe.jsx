const React = require('react')
const Html = require('../layouts/default')
const Navbar = require('../components/navbar')
const SignIn = require('../components/signin.jsx')
const CreateForm = require('../components/CreateForm.jsx')

const Home = props => {
  return (
    <Html>
      <Navbar />
      <CreateForm />
    </Html>
      )
    }
    
module.exports = createRecipe