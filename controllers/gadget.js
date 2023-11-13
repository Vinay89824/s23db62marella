var gadget = require('../models/gadget');
// List of all gadget
exports.gadget_list = async function(req, res) {
    try{
    thegadget = await gadget.find();
    res.send(thegadget);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle gadget create on POST.
exports.gadget_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gadget();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gadget_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.quantity = req.body.quantity;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.gadget_view_all_Page = async function(req, res) {
    try{
    thegadget = await gadget.find();
    res.render('gadget', { title: 'gadget Search Results', results: thegadget });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific gadget.
// exports.gadget_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: gadgetdetail: ' + req.params.id);
// };
// for a specific gadget.
exports.gadget_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gadget.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// // Handle gadgetcreate on POST.
// exports.gadget_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: gadgetcreate POST');
// };
// Handle gadgetdelete form on DELETE.
exports.gadget_delete = function(req, res) {
res.send('NOT IMPLEMENTED: gadgetdelete DELETE ' + req.params.id);
};
// // Handle gadgetupdate form on PUT.
// exports.gadget_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: gadgetupdate PUT' + req.params.id);
// };
//Handle gadget update form on PUT.
exports.gadget_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await gadget.findById( req.params.id)
// Do updates of properties
if(req.body.name)toUpdate.name = req.body.name;
if(req.body.quantity)toUpdate.quantity = req.body.quantity;
if(req.body.price)toUpdate.price = req.body.price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// there are changes made to know the commits 