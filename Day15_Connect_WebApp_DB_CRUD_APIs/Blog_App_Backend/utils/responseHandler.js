
const successResponse = (res, data, statusCode = 200) => {
    res.status(statusCode).json({
        status: 'success',
        statusCode,
        data
    });
};


const errorResponse = (res, error, statusCode = 500) => {
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message: error?.message || 'Internal Server Error'
    });
};

const notFoundResponse = (res, message= 'Resource Not Found', statusCode = 404) => {
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};

module.exports = {
    successResponse,
    errorResponse,
    notFoundResponse
}