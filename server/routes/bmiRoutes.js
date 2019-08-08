const express = require('express')
const router = express.Router()
const bmiController = require('../controllers/BmiController')

router.post('/', bmiController.getBmi)

module.exports = router;