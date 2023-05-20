const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Admin = mongoose.model("admin", Schema);

module.exports = Admin;