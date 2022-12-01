const forum = require("../models/forum")
const user = require("../models/user")
const db = require("../config/koneksi")

module.exports = {
    getAllForum: async (req, res) => {
        try {
            const Forum = await forum.find()
            res.json({
                data: Forum
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    deleteForumById: async (req, res) => {
        const id  = req.params.id
        try {
            const hapus = await forum.findByIdAndDelete(id)
            if(!hapus) return res.status(404).json({message: "Data tidak ada"})
            return res.json({
                data: hapus
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getAllUser: async (req, res) => {
        try {
            const usr = await user.find()
            res.json({
                data: usr
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    updateUserById: async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body

            const perbarui =  await profil.findByIdAndUpdate(id, data, { new: true})
            if(!perbarui) return res.status(404).json({message: "Data tidak ada"})
            return res.json({
                data: perbarui
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        } 
    }
}