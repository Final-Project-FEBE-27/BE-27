const express = require("express");
const router = express.Router();
const { getForumByKategori } = require("../controllers/dashboard.controller");

router.get('/:kategori', getForumByKategori)

module.exports = router