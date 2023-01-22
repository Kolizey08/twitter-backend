const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    name: String,
    save: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twit'
    }] 
})

const User = mongoose.model('User', userShema)
module.exports = User