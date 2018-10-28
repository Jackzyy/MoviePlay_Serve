var express = require('express');
var router = express.Router();

router.use(require('./controller/movie/movie'));
router.use(require('./controller/movie/details'));
router.use(require('./controller/movie/play'));
router.use(require('./controller/home'))
router.use(require('./controller/search'))

module.exports = router;
