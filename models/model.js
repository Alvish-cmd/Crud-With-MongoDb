const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    password:{
        type:String,
    },
    Dob:{
        type:Date,
    },
    country:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
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