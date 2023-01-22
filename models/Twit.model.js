const mongoose = require('mongoose')

const twitryShema = mongoose.Schema({
    twit: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    like: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }] 
})

const Twit = mongoose.model('Twit', twitryShema)
module.exports = Twit