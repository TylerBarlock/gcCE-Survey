const express = require('express');

const SurveyCtrl = require('../controllers/survey-ctrl');

const router = express.Router();

router.post('/survey', SurveyCtrl.createSurvey);
router.put('/survey/:id', SurveyCtrl.updateSurvey);
router.delete('/survey/:id', SurveyCtrl.deleteSurvey);
router.get('/survey/:id', SurveyCtrl.getSurveybyId);
router.get('/surveys', SurveyCtrl.getSurveys);

module.exports = router;