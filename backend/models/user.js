const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: String

});

module.exports = mongoose.model('User', userSchema);