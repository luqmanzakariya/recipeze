const router = require('express').Router()
const userRoutes = require('./userRoutes')
const bmiRoutes = require('./bmiRoutes')
const nutritionRoutes = require('./nutritionRoutes')

router.use('/users', userRoutes)
router.use('/getBmi', bmiRoutes)
router.use('/nutrition', nutritionRoutes)

module.exports = router