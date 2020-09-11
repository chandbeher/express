const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var contact = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
var Contact =  module.exports = mongoose.model('Contact', contact);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}