const express = require("express")
const router = express.Router()
const { addForum } = require("../controllers/dashboard.controller")

router.post("/", addForum)

module.exports = router