const router = require('express').Router()

router.use('/api', require('./regionRoutes.js'))



module.exports = router
