var express = require('express');
const gadget_controlers= require('../controllers/gadget');
var router = express.Router();
router.get('/', gadget_controlers.gadget_view_all_Page );
module.exports = router;

