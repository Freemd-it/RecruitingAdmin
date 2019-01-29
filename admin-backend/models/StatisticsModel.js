const mongoose = require('mongoose');
const {Schema} = mongoose;


const StatisticsSchema = new Schema({
    batch: Number,
    lastUpdated: String,
    UnivStats: [
        {
            university: String,
            count: Number
        }
    ],
    AgeMaleStats: [
        {
            age: Number,
            is_male: Boolean,
            count: Number
        }
    ]
});

module.exports = mongoose.model('Statistics', StatisticsSchema);