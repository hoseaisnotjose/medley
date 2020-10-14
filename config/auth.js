const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


// export a middleware function
module.exports = function(req, res, next) {
    // checking for token being sent
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        token = token.replace('Bearer ', '');
        jwt.verify(token, SECRET, function() {
            if(err) {
                return next(err);
            } else {
                req.user = decoded.user;
                return next();
            }
        });
    } else {
        next();
    }
};