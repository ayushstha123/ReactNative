const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    todos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Todo',
    }]
},{ timestamps: true }
)

const User=mongoose.model("User",userSchema);
module.exports=User;