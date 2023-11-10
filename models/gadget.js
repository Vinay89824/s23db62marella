const mongoose = require("mongoose")
const gadgetSchema = mongoose.Schema({
name: String,
quantity: String,
price: Number
})
module.exports = mongoose.model("gadget",
gadgetSchema)