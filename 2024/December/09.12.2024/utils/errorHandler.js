const errorHandler = (err, req, res, _next) => {
  switch (err.code) {
    case 400:
      res.status(err.code).send(err.msg || "Ooops something went wrong");
      break;
    case 401:
      res
        .status(err.code)
        .send(err.msg || "Ooops Youre not Authorized to access this resource");
      break;
    case 404:
      res
        .status(err.code)
        .send("Ooops Youve reached and Resource that does not exist");
      break;
    case 500:
      res.status(err.code).send("Ooops something went wrong on the server");
      break;
    default:
      res.status(500).send("Ooops something went wrong on the server");
      break;
  }
};

module.exports = errorHandler;