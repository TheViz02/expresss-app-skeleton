import { errorResponse, successResponse } from "../utils/apiResponse.js";

export const indexResponse = () => {
  return successResponse("Data Fetched Successfully", "Hello World");
};

export const errorMessageSend = () => {
  return errorResponse(
    "Oppsiee..... there is an error",
    "ERROR 500 status 200"
  );
};
