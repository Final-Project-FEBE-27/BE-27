const express = require("express");
const router = express.Router();
const {
    getUserById,
    updateUserById
} = require("../controllers/profil.controller");

router.get('/:id', getUserById)
router.put('/:id', updateUserById)

module.exports = router