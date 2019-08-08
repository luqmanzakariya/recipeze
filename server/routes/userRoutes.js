const router = require('express').Router()
const UserController = require('../controllers/UserController')
// const youtubeController = require('../controllers/youtubeController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/loginGoogle', UserController.loginGoogle)
// router.get('/search', youtubeController.search)

module.exports = router