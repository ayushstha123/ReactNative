const mongoose=require('mongoose')
const todoSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"

    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true,
    },

},{ timestamps: true })
const Todo=mongoose.model("Todo",todoSchema)
module.exports=Todo