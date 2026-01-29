const jwt = require('jsonwebtoken');

const verifyToken = async(req, res, next)=>{
    const utoken = req.header('Authorization');
    try {
        const verified = jwt.verify(utoken, process.env.JWT_SECRET_KEY);
    // const req.user = verified;
        next();
    } catch (error) {
        res.json({message: 'Auth Error!'})
    }

}

module.exports = verifyToken