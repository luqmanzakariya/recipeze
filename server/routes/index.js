const router = require('express').Router()
const userRoutes = require('./userRoutes')
const bmiRoutes = require('./bmiRoutes')
const nutritionRoutes = require('./nutritionRoutes')
const youtubeRoutes = require('./youtubeRoutes')

router.use('/users', userRoutes)
router.use('/getBmi', bmiRoutes)
router.use('/nutrition', nutritionRoutes)
router.use('/youtube', youtubeRoutes)

module.exports = router