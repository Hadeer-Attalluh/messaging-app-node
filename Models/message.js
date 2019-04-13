const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    from: {
        type: String
    },
    to: {
        type: String
    }
    ,
    body: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 500,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        set: d => Date.now()
    }
});

const messageModel = mongoose.model('message', messageSchema);

module.exports = messageModel;