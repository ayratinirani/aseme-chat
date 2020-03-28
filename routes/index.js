var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',"users":[
    "ali","سعیده","uhwli"
  ]});
});
router.get('/aseme', function(req, res, next) {
  res.render('index', { title: 'عاصمه قیز' });
});

module.exports = router;
