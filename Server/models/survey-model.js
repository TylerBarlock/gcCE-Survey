const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Survey = new Schema(
    {
        _id: { type: Number, required: true},
        title: { type: String, required: true },
        desc: { type: String, required: true },
        options: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('surveys', Survey);