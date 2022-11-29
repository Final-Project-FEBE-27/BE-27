const express = require('express')
const router = express.Router()

const registerRouter = require('./register.router')
const loginRouter = require('./login.router')
const loginadminRouter = require('./loginadmin.router')

// user
const dashboardRouter = require('./dashboard.router')
const yourforumRouter = require('./yourforum.router')
const kategoriRouter = require('./kategori.router')
const uploadRouter = require('./upload.router')
const profilRouter = require('./profil.router')

// admin
const adminRouter = require('./admin.router')

const token = require('../middleware/verifyToken')

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/loginadmin', loginadminRouter)
router.use('/dashboard', token, dashboardRouter)
router.use('/yourforum', token, yourforumRouter)
router.use('/kategori', token, kategoriRouter)
router.use('/upload', token, uploadRouter)
router.use('/profil', token, profilRouter)
router.use('/admin', token, adminRouter)

module.exports = router