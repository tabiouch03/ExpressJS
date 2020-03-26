var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET index page. */
router.get('/', function(req, res, next) {

  dbConn.query('SELECT * FROM books ORDER BY id desc', function(err,rows){

    if(err){
      req.flash('error',err);
      res.render('books',{data:''});
    } else {
      res.render('index',{data:rows, title:'Fabio'});
    }
  })
});
console.log(dbConn);

module.exports = router;
