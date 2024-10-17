var express = require('express');
var router = express.Router();
const hubMain = require('../controllers/main'); 
const hubController = require('../controllers/locations'); 
const hubOthers = require('../controllers/others'); 


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/discussion-forums', hubController.Discussion_forms);
router.get('/events',hubController.Events);
router.get('/polls-surveys',hubController.Polls_surveys);
router.get('/tutorial-videos',hubController.Tutorial_videos);

router.get('/contact-us',hubOthers.contact);
router.get('/about',hubOthers.about);


module.exports = router
