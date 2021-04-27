const mongoose = require("mongoose")

const schemaStructure=mongoose.Schema({
    name:{
        type: String,
    },
   brand:{
        type:String,
    },
   price:{
        type:Number,
        
    },
    quantity:{
        type:Number,
        
    },
    unit:{
        type:Number,
        
    },
    
})

module.exports = mongoose.model("foods", schemaStructure)
