const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = function(req, res, next){
   
    const userToken = req.header('auto-token');

    if(!userToken) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(userToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Not valid Token');
    }

}