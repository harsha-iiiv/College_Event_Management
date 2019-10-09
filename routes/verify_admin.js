const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = function(req, res, next){
   
    const token = req.header('x-auto-token');

    if(!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.ADMIN_TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Not valid token');
    }

}