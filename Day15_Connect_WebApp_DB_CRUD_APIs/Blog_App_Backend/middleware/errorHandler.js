const { errorResponse, notFoundResponse } = require('../utils/responseHandler');

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    errorResponse(res, err, err.statusCode || 500);
};

const notFoundHandler = (req, res, next) => {
    notFoundResponse(res);
};

module.exports = {
    errorHandler,
    notFoundHandler
}