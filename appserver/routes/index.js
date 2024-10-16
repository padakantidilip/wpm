var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route for Discussion Forums
router.get('/discussion-forums', (req, res) => {
    res.send('Discussion Forums Page');
});

// Route for Tutorial Videos
router.get('/tutorial-videos', (req, res) => {
    res.send('Tutorial Videos Page');
});

// Route for Events
router.get('/events', (req, res) => {
    res.send('Events Page');
});

// Route for Polls & Surveys
router.get('/polls-surveys', (req, res) => {
    res.send('Polls & Surveys Page');
});

// Route for Contact Us
router.get('/contact-us', (req, res) => {
    res.send('Contact Us Page');
});

module.exports = router;