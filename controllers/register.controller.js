const bcrypt = require('bcrypt');
const User = require("../models/user");
const { registerValidation } = require(`../config/validation`)

module.exports = {
    addUser: async (req, res) => {

        const { error } = registerValidation(req.body)
        if(error) return res.status(400).json({
            status: res.statusCode,
            message: error.details[0].message
        })

        const emailExists = await User.findOne({email: req.body.email});
        if(emailExists) return res.status(400).json({
            status: res.statusCode,
            message: 'Email already exists'
        })

        const data = req.body

        const saltRounds = 10
        const hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = hash

        const user = new User(data)

        user.save()

        res.status(201).json({
        message: "data created successfully",
    })
    }
};
