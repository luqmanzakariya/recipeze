const router = require('express').Router()
const userRoutes = require('./userRoutes')
const bmiRoutes = require('./bmiRoutes')

router.use('/users', userRoutes)
router.use('/getBmi', bmiRoutes)

module.exports = router