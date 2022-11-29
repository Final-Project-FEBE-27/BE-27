const profil = require("../models/user")
const db = require("../config/koneksi")

module.exports = {
    getUserById: async (req, res) => {
        try {
            const id = req.params.id
            const user = await profil.findById(id)
            if(user){
                res.json({
                    data: user
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
    updateUserById: async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body

            const perbarui =  await profil.findByIdAndUpdate(id, data, { new: true})
            if(!perbarui) return res.status(404).json({message: "Data tidak ada"})
            return res.json({
                message: "Data berhasil di update",
                data: perbarui
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        } 
    }
}