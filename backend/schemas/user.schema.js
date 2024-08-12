const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    email: { type: String, required: true },
    isActive: { type: Boolean, default: false}
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;