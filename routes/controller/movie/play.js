var express = require('express')
var router = express.Router()
var request = require('request')
var utils = require('../../../utils')

const getPlayUrl = utils.getPlayUrl

router.get('/play', function(req, res, next) {
    // console.log(req.query.url);
    let Url = req.query.url
    request(Url, function (error, response, body) {
        let html = body;
        let data = getPlayUrl(html)
         res.json({
             code:200,
             data
         });
    });

});

module.exports = router;