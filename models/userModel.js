const mongoose = require('mongoose');
const Shema = mongoose.Schema;

//define model

const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String
});

//create model class

const userModelClass = mongoose.model('user', userSchema)

//export model

module.exports = userModelClass