var express = require('express')
var router = express.Router()
var request = require('request')
var utils = require('../../../utils')

const getDetail = utils.getDetail
const urlEdit = utils.urlEdit

router.get('/detail', function(req, res, next) {
    // console.log(req.query.url);
    let Url = req.query.url
    request(Url, function (error, response, body) {
        let html = body;
        let data = getDetail(html)
         res.json({
             code:200,
             data,
             Url
         });
    });

});

module.exports = router;