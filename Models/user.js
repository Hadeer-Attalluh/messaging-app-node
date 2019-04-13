const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    age: {
        type: Number,
        min: 18,
        max: 150
    },
    gender: {
        type: String,
        lowercase: true,
        enum: ['male', 'female', 'n/a']
    },
    country: {
        type: String,
        lowercase: true,
        enum: ['egypt', 'france', 'german', 'italy', 'span']
    }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;