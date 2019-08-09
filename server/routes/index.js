const router = require('express').Router()
const userRoutes = require('./userRoutes')
const bmiRoutes = require('./bmiRoutes')
<<<<<<< HEAD
const nutritionRoutes = require('./nutritionRoutes')

router.use('/users', userRoutes)
router.use('/getBmi', bmiRoutes)
router.use('/nutrition', nutritionRoutes)
=======
const youtubeRoutes = require('./youtubeRoutes')

router.use('/users', userRoutes)
router.use('/getBmi', bmiRoutes)
router.use('/youtube', youtubeRoutes)
>>>>>>> youtube search

module.exports = router