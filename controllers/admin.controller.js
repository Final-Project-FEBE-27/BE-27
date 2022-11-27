const forum = require("../models/forum")
const user = require("../models/user")
const db = require("../config/koneksi")

module.exports = {
    getAllForum: async (req, res) => {
        try {
            const Forum = await forum.find()
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    deleteForumById: async (req, res) => {
        const id  = req.params.id
        try {
            const hapus = await forum.findByIdAndDelete(id)
            if(!hapus) return res.status(404).json({message: "Data tidak ada"})
            return res.json({message: "Data berhasil dihapus"})
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getAllUser: async (req, res) => {
        try {
            const Forum = await user.find()
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    }
    
}