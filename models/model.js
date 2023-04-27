const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    number:{
        type:Number,
       
    },
    password:{
        type:String,
    },
    Dob:{
        type:Date,
    },
    country:{
        type:String,
        
    },
    address:{
        type:String,
      
    },
    image:{
        type: String,
    },
    file:{
        type: String, 
    }
})

const Userdb = mongoose.model('userdb',schema)

module.exports = Userdb