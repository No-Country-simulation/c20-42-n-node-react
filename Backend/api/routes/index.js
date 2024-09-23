var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  function(req, res, next) {
  // #swagger.tags = ['default']
  res.json({ title: 'api Adopcion' });
});

router.post('/', function(req, res, next) {
  // #swagger.tags = ['default']
  res.json({ title: 'api Adopcion' });
});

router.put('/', function(req, res, next) {
  // #swagger.tags = ['default']
  res.json({ title: 'api Adopcion' });
});

router.delete('/', function(req, res, next) {
  // #swagger.tags = ['default']
  res.json({ title: 'api Adopcion' });
});

module.exports = router;
