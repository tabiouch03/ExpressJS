var express = require('express');
var router = express.Router();

/* GET allbook page. */
router.get('/', function(req, res, next) {
  res.render('allbook', { title: 'Express' });
  console.log(res);
  
});

module.exports = router;