const express = require("express");
const router = express.Router();
const { 
    getAllForum,
    deleteForumById,
    getAllUser
 } = require("../controllers/admin.controller");

router.get('/', getAllForum)
router.delete('/', deleteForumById)
router.get('/user', getAllUser)

module.exports = router