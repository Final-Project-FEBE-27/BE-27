const komen = require("../models/komentar")
const db = require("../config/koneksi")

module.exports = {
    addkomentar: async (req, res) => {
        try {
            const data = req.body
            const Komen = new forum(data)
            Komen.save()

            res.redirect("/yourforum/:id")
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
}