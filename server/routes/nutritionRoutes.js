const router = require('express').Router()
const NutritionController = require('../controllers/NutritionController')

router.get('/', NutritionController.getNutrition)

module.exports = router