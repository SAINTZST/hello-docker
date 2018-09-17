var express = require('express')
var router = express.Router()
var docker = require('./apis/docker')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use(docker)

module.exports = router;
