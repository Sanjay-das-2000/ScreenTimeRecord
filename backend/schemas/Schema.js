const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name: String,
    age: String,
    DOB: String,
    POB: String,
    TOB: String,
    gestation: String,
    deliverymode: String,
    birthweight: String,
    gender: String,
    familytype: String,
    religion: String,

})

const Child = mongoose.model("child", Schema);

module.exports = Child;