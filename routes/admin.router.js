const express = require("express");
const router = express.Router();
const { 
    getAllForum,
    deleteForumById,
    getAllUser,
    deleteUser,
    updateUserById
 } = require("../controllers/admin.controller");

router.get('/', getAllForum)
router.delete('/', deleteForumById)
router.get('/user', getAllUser)
router.delete('/user', deleteUser)
router.put('/editUser/:id', updateUserById)

module.exports = router