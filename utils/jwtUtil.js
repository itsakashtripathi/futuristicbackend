const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
require('dotenv').config();

module.exports = {

    sign: async (user) => jwt.sign(user, process.env.ACCESS_TOKEN_SECRET),

    verify: async (token, req, res) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(403).send({ success: false, data: null, message: "Invalid Token" });
                return false;
            } else {
                req.currUser = user;
                return true;
            }
        })
    },

};