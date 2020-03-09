const React = require('react')

const Html = props => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <title>My Recipe Box</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/css/uikit.min.css" />
        <link rel='stylesheet' href='./style.css' />
      </head>
      <body>
        {props.children}
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/js/uikit-icons.min.js"></script>
        <script src='./app.js' />
      </body>
  )
}

module.exports = Html