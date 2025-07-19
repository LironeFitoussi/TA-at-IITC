const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('User', userSchema)