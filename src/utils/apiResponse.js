/**
 * Success Response for API
 * @param {string} message
 * @param {mixed} data
 * @param {boolean} statusResponse
 * @param {boolean} validationStatus
 * @returns {Object}
 */
export const successResponse = (
    message,
    data,
    statusResponse = true,
    validationStatus = true
) => {
    return {
        status: statusResponse,
        validationStatus: validationStatus,
        data: data,
        message: message,
    };
};

/**
 * Error Response for API
 * @param {string} message
 * @param {mixed} data
 * @param {boolean} statusResponse
 * @returns {Object}
 */
export const errorResponse = (message, data, statusResponse = false, validationStatus = false) => {
    return {
        status: statusResponse,
        validationStatus: validationStatus,
        data: data,
        errorMessage: message,
    };
};

/**
 * Validation response with fields error
 * @param {string} message
 * @param {mixed} data
 * @param {boolean} validationStatus
 * @param {boolean} statusResponse
 * @returns {object}
 */
export const validationResponse = (
    message,
    data,
    validationStatus = false,
    statusResponse = false
) => {
    return {
        status: statusResponse,
        validationStatus: validationStatus,
        message: message,
        validationMessage: data,
    };
};
