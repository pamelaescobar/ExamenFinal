var express = require('express');
var router = express.Router();
var reclamo = {estudiante:"pamela",
               nota:"95"}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Examen Final", subtitle:"Avances en Computacion", reclamo:reclamo});
});

module.exports = router;
