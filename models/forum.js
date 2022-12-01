const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
  user: {
    type: mongoose.ObjectId,
    ref: "User"
  },
  judul: {
    type: String,
    required: true
  },
  isi: {
    type: String,
    required: true
  },
  kategori: {
    type: String,
    required: true
  },
  komentar: {
      type: mongoose.ObjectId,
      ref: "Komentar"
    },
})

const Forum = mongoose.model("Forum", userSchema)

module.exports = Forum