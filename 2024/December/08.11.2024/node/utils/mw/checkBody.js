function checkBody(req, res, next) {
    if (req.body && Object.keys(req.body).length > 0) {
        next();
    } else {
        res.status(400).send({ error: "Body is missing" });
    }
}

module.exports = checkBody;