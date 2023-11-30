const mongoose = require("mongoose")
const gadgetSchema = mongoose.Schema({
name: String,
quantity: String,
price: { type : Number,
    min : 1,
    max : 40000
},
})
module.exports = mongoose.model("gadget",
gadgetSchema)