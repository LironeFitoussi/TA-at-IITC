const user = ["Adam", "Liraz", "Bob", "Itay"];
const errorHandler = require("./errorHandler");

const auth = (req, res, next) => {
  try {
    const { authname } = req.headers;
    if (user.includes(authname)) {
      next();
    } else {
      throw { code: 401, msg: "Unauthorized" };
    }
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

module.exports = auth;
