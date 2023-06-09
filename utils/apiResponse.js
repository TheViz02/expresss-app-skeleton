/**
 * Success Response for API
 * @param {string} message
 * @param {boolean} statusResponse
 * @returns {Object}
 */
const successResponse = (message, statusResponse = true) => {
  return {
    message: message,
    statusResponse: statusResponse,
  };
};

/**
 * Error Response for API
 * @param {string} message
 * @param {boolean} statusResponse
 * @returns {Object}
 */
const errorResponse = (message, statusResponse = false) => {
  return {
    message: message,
    statusResponse: statusResponse,
  };
};

module.exports = {
  successResponse,
  errorResponse,
};
