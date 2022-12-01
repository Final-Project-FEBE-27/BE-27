const express = require("express");
const router = express.Router();
const { getForumById } = require("../controllers/dashboard.controller");
const { addkomentar } = require("../controllers/komentar.controller");

router.get('/:id', getForumById)
router.post('/:id', addkomentar)

module.exports = router