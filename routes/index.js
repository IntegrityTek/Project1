var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
// Registration
router.get('/registration', function(req, res) {
  res.render('registration');
});
//Events
router.get('/events', function(req, res) {
  res.render('events');
});
// ABBI Registration
router.get('/abbireg', function(req, res) {
  res.render('reg');
});
// ABBI Programs
router.get('/programs', function(req, res) {
  res.render('programs');
});
module.exports = router;
