const authUsers = ["Alice", "Bob", "Charlie", "David"];

function authMiddleware(req, res, next) {
  console.log("User route middleware");
  if (authUsers.includes(req.query.name)) {
    next();
  } else {
    res.send("Unauthorized");
  }
}

module.exports = authMiddleware;
