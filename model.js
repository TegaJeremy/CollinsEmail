const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    text:{type:String,
        required:true
    }
})
const userModel = mongoose.model("user", userSchema)
module.exports = userModel