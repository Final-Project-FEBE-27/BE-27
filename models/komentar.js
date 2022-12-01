const mongoose = require('mongoose');
const { Schema } = mongoose

const komenSchema = new Schema({
    nama: {
        type: mongoose.ObjectId,
        ref: "User"
    },

    komentar: {
        type: String,
        required: true
    },
    
    balasan: [this]
})

const Komentar = mongoose.model("Komentar", komenSchema)

module.exports = Komentar