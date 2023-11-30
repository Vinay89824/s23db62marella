const mongoose = require("mongoose")
const gadgetSchema = mongoose.Schema({
name: {type: String,
    minlength : 1,
    maxlength : 7
},
quantity: {type: String,
    minlength : 1,
    maxlength : 7
},
price: { type : Number,
    min : 1,
    max : 40000
},
})
module.exports = mongoose.model("gadget",
gadgetSchema)