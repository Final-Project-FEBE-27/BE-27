const express = require("express");
const router = express.Router();
const { 
    getForumById
} = require("../controllers/dashboard.controller");


router.get('/:id', getForumById)


module.exports = router