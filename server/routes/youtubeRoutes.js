const router = require('express').Router()
const youtubeController = require('../controllers/youtubeController')

router.get('/search', youtubeController.search)

module.exports = router