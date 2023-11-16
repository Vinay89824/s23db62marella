var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gadget_controller = require('../controllers/gadget');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// gadget ROUTES ///
// POST request for creating a gadget.
router.post('/gadget', gadget_controller.gadget_create_post);
// DELETE request to delete gadget.
router.delete('/gadget/:id', gadget_controller.gadget_delete);
// PUT request to update gadget.
router.put('/gadget/:id', gadget_controller.gadget_update_put);
// GET request for one gadget.
router.get('/gadget/:id', gadget_controller.gadget_detail);
// GET request for list of all gadget items.
router.get('/gadget', gadget_controller.gadget_list);

module.exports = router;
