const admin = require("../models/admin");
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (req, res) => {
        const data = req.body;
        const user = await admin.findOne({ username: data.username });
        if(!user) return res.status(400).json({
            status: res.statusCode,
            message: 'username not found',
        });

        const cekPassword = await admin.findOne({ password: user.password });
        if(!cekPassword) return res.status(400).json({
            status: res.statusCode,
            message: 'Passwords not found',
        })
            const token = jwt.sign({ _id: user._id },
                process.env.JWT, {expiresIn: "1h"})
                
            res.header('auth_token', token).json({
                token: token,
                data: user.username
            })
    } 
};