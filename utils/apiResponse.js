/**
 * Success Response for API
 * @param {string} message
 * @param {mixed} data
 * @param {boolean} statusResponse
 * @returns {Object}
 */
export const successResponse = (message, data, statusResponse = true) => {
  return {
    message: message,
    data: data,
    responseStatus: statusResponse,
  };
};

/**
 * Error Response for API
 * @param {string} message
 * @param {mixed} data
 * @param {boolean} statusResponse
 * @returns {Object}
 */
export const errorResponse = (message, data, statusResponse = false) => {
  return {
    errorMessage: message,
    data: data,
    responseStatus: statusResponse,
  };
};
