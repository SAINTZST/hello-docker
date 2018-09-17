var express = require('express')
var router = express.Router()

var docker = require('./docker')

router.route('/docker').get(docker.helloDocker)

module.exports = router