const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  });
  
  

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
    reviews: [reviewSchema]
},{
    timestamps: true
})


module.exports = mongoose.model('Game', gameSchema)