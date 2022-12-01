const bcrypt = require('bcrypt');
const Login = require("../models/user");
const jwt = require('jsonwebtoken');

module.exports = {
    login: async (req, res) => {
        const data = req.body;
        const id = req.params.id
        const user = await Login.findOne({ email: data.email });
        if(!user) return res.status(400).json({
            status: res.statusCode,
            message: 'Email not found',
        });

        const cekPassword = await bcrypt.compare(data.password, user.password);
        if(!cekPassword) return res.status(400).json({
            status: res.statusCode,
            message: 'Passwords not found',
            
        })
            const token = jwt.sign({ _id: user._id },
                process.env.JWT, {expiresIn: "1h"})
                
            res.header('auth_token', token).json({
                token: token,
                data: user.username,
                id: user._id
            })
    } 
};