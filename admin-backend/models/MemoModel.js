const mongoose = require('mongoose');
const { Schema } = mongoose;

const MemoSchema = new Schema({
    userId: mongoose.Schema.Types.ObjectId,
    contents: String,
    writer: String,
    registedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Memo', MemoSchema);