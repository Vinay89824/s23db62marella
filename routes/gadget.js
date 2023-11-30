var express = require('express');
const gadget_controlers= require('../controllers/gadget');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
router.get('/', gadget_controlers.gadget_view_all_Page );
/* GET detail gadget page */
router.get('/detail', gadget_controlers.gadget_view_one_Page);
/* GET create gadget page */
router.get('/create', gadget_controlers.gadget_create_Page);
/* GET create update page */
router.get('/update', secured,gadget_controlers.gadget_update_Page);
/* GET delete gadget page */
router.get('/delete', gadget_controlers.gadget_delete_Page);


module.exports = router;

