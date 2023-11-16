var express = require('express');
const gadget_controlers= require('../controllers/gadget');
var router = express.Router();
router.get('/', gadget_controlers.gadget_view_all_Page );
/* GET detail gadget page */
router.get('/detail', gadget_controlers.gadget_view_one_Page);
/* GET create gadget page */
router.get('/create', gadget_controlers.gadget_create_Page);
/* GET create update page */
router.get('/update', gadget_controlers.gadget_update_Page);
/* GET delete gadget page */
router.get('/delete', gadget_controlers.gadget_delete_Page);


module.exports = router;

