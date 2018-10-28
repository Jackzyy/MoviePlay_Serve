var express = require('express')
var router = express.Router()
var request = require('request')
var utils = require('../../../utils')

let getHome = utils.getHome

router.get('/home', (req, res) => {
    let Url = 'http://m.kkkkmao.com/'
    request(Url, function (error, response, body) {
        let html = body;
        let data = getHome(html)
         res.json({
             code:200,
             data
         });
    });
});


module.exports = router;
