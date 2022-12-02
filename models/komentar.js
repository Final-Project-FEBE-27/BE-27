const mongoose = require('mongoose');
const { Schema } = mongoose

const komenSchema = new Schema({
    nama: {
        type: mongoose.ObjectId,
        ref: "User"
    },

    username: {
        type: String,
        required: true
    },

    komentar: {
        type: String,
        required: true
    },
    
    balasan: [this]
})

const Komentar = mongoose.model("Komentar", komenSchema)

module.exports = Komentar