const mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose);

const Schema =  mongoose.Schema;
    const schema = new Schema({
    customer:{
        type:String,
    },

    vehical_number:{
        type:String,
    },
    pickup_date:{
        type:Date,
    },
    drop_date:{
        type:Date,
    },
    location:{
        type:String,
    },
    service_price:{
        type:Number,
    },
    payble_amount:{
        type: Number,
    },
    modelId:{
        type:Schema.Types.ObjectId,
        ref:'userdb',
        require:true
    },
})

const Servicedb = mongoose.model('servicedb',schema)

module.exports = Servicedb