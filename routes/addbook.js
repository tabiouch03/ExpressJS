var express = require('express');
var router = express.Router();

/* GET addbook page. */
router.get('/', function(req, res, next) {
  res.render('addbook', { title: 'Express' });
  console.log(res);
  
});

module.exports = router;