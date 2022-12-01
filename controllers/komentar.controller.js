const komen = require("../models/komentar")
const forum = require("../models/forum")

const db = require("../config/koneksi")

module.exports = {
    addkomentar: async (req, res) => {
        try {
            const data = req.body
            const asal = data.id_komentar 
            const Komen = new komen(data)
            const id = req.params.id
            const Forum = await forum.findOne({_id:id})

            if(!asal){    
                Komen.save()   
                Forum.komentar.push(Komen)
               await Forum.save()
            }else{

                const Komen_Asal = await komen.findOne({_id:asal})
                Komen_Asal.balasan.push(Komen)
                await Komen_Asal.save()
            }
            res.json({
                data:data
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
}