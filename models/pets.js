const mongoose = require("mongoose");
const validator = requre("validator"); 

const Pet mongoose.model("Pet", {
    name : {
        type: String,
        required: true, 
        trim: true 
    },

    animal: {
        type: String,
        required: true,
        trim: true,

    },
});


   

module.exports = Pet;