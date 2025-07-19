
export default function authUser (req, res, next) {
    console.log(req.query.apiKey);
    if (req.query.apiKey) {
        if (req.query.apiKey === "123456789") {
            next()
        }
        res.status(401).send("Wrong API KEY")
    }
    res.status(401).send("No API Key provided")
}