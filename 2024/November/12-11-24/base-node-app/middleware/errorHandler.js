
// Error Handler 500
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send({
    status: "error",
    message: "Something went wrong",
  });
};


module.exports = errorHandler;