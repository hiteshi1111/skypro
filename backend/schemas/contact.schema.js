const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    fullName : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
}, {timestamps: true});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;