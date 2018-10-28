var express = require('express')
var router = express.Router()
var request = require('request')
var utils = require('../../../utils')

const getMovie = utils.Movie
const urlEdit = utils.urlEdit

router.get('/movie', function(req, res, next) {
    let urlInfo = urlEdit(req)
    let Url = urlEdit(req).url
    request(Url, function (error, response, body) {
        let html = body;
        let data = getMovie(html)
         res.json({
            code:200,
            urlInfo,
            data
         });
    });
});

module.exports = router;