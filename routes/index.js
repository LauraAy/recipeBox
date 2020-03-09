const router = require('express').Router()

router.use('/api', require('./regionRoutes.js'))

router.use(require('./htmlRoutes.js'))

module.exports = router




module.exports = router
