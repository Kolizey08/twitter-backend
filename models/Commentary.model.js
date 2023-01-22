const mongoose = require('mongoose')

const commentaryShema = mongoose.Schema({
    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    twit: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twit'
    }
})

const Commentary = mongoose.model('Commentary', commentaryShema)
module.exports = Commentary