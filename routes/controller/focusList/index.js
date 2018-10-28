var express = require('express')
var router = express.Router()
var request = require('request')
var utils = require('../../../utils')

let getBroadcast = utils.getBroadcast

router.get('/broadcast', (req, res) => {
    let Url = 'http://m.kkkkmao.com/'
    request(Url, function (error, response, body) {
        let html = body;
        let data = getBroadcast(html)
         res.json({
             code:200,
             data
         });
    });
});


module.exports = router;
