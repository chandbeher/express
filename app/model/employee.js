const mongoose = require('mongoose');

var employee = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String
});
module.exports = mongoose.model('Employee', employee);
