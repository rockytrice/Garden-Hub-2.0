const mongoose = require('mongoose');
//save a reference to the Schema constructor
const Schema = mongoose.Schema;

//create a new schema object
const TemperatureSchema = new Schema({
    temp:{
        type: String,
        required:true
    },
    time:{
        type:Date,
        required:true
    }
});

//this creates the model, Article, from the schmea above. This is the mongoose model method
const Temperature = mongoose.model("Temperature", TemperatureSchema);
//export the model (to the index.js)
module.exports = Temperature;