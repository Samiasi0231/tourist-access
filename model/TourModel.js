
const mongoose = require("mongoose")

const tourSchema = new mongoose.Schema({

    name: {type: String, require: true, lowercase: true},
    email: {type: String, require: true, unique: true},
    destination: {type: String, require:true},
    signupkey: {type: String,require:true},
    passkey: {type: String, require:true,unique:true},

}, { timestamps: true})


const Tour = mongoose.model("Tour",tourSchema)


module.exports = Tour