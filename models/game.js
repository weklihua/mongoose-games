const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gameSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    releaseDate: Date,
    numPlayers: {
        type: Number,
        min: 1,
    },
    genre: [{
        type: String,
    }],
    publisher: String,
    supportedLanguage: [{
        type: String
    }],
    description: String,
    // review: [reviewSchema]
},{
    timestamps: true
})


module.exports = mongoose.model('Game', gameSchema)