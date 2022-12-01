const komen = require("../models/komentar")
const forum = require("../models/forum")

const db = require("../config/koneksi")

module.exports = {
    addkomentar: async (req, res) => {
        try {
            const data = req.body
            const Komen = new komen(data)
            Komen.save()
    
            const id = req.params.id
            const Forum = await forum.findOne({_id:id})
            Forum.komentar.push(Komen)
            await Forum.save()
    
            res.json({
                data:Forum
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
}