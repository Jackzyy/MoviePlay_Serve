var express = require('express')
var router = express.Router()
var request = require('request')
var utils = require('../../../utils')

const getSearch = utils.getSearch

router.get('/search', function(req, res, next) {

    let str = encodeURI(req.query.keyword)
    let id = req.query.id

    let Url = `http://m.kkkkmao.com/vod-search-wd-${str}-p-${id}.html`
    console.log(Url);
    request(Url, function (error, response, body) {
        let html = body
        let data = getSearch(html)
         res.json({
            code:200,
            data
         });
    });
});

module.exports = router;