const errorHandler = require("./errorHandler");

function checkBody(req, res, next) {
    try {
        if (req.body && Object.keys(req.body).length > 0) {
            return next();
        } 

        throw { code: 400 };
    } catch (error) {
        errorHandler(error, req, res, next);
    }
}

module.exports = checkBody;