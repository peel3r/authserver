const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//define model

const painRecordSchema = new Schema({
    backPain: Integer,
    mood: Integer
});


//create model class

const userModelClass = mongoose.model('painRecord', painRecordSchema)

//export model

module.exports = userModelClass;