const mongoose = require('mongoose');
//save a reference to the Schema constructor
const Schema = mongoose.Schema;

//create a new schema object
const MoistureSchema = new Schema({
    moisture:{
        type: String,
        required:true
    },
    time:{
        type:Date,
        required:true
    }
});

//this creates the model, Article, from the schmea above. This is the mongoose model method
const Moisture = mongoose.model("Moisture", MoistureSchema);
//export the model (to the index.js)
module.exports = Moisture;