const forum = require("../models/forum")
const db = require("../config/koneksi")

module.exports = {
    getAllForum: async (req, res) => {
        try {
            const Forum = await forum.find().populate("user", "username")
            res.json({
                data: Forum
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getForumById: async (req, res) => {
        try {
            const id = req.params.id
            const artikels = await forum.findById(id).populate("user", "username")
            if(artikels){
                res.json({
                    data: artikels
                })
            } else {
                res.json({
                    message: "data tidak ada ni"
                })
            }
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getForumByKategori: async (req, res) => {
        try {
            const kategori = req.params.kategori
            console.log(req.params);
            const artikels = await forum.findOne({"kategori": kategori})
            if(artikels){
                res.json({
                    data: artikels
                })
            } else {
                res.json({
                    message: "data tidak ada ni"
                })
            }
        } catch (error) {
            
        }
    },

    addForum: (req, res) => {
        try {
            const data = req.body
            const Forum = new forum(data)
            Forum.save()

            res.json({
                data:data
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    }
}