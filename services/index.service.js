import { successResponse } from "../utils/apiResponse.js";

export const indexResponse = () => {
  return successResponse("Data Fetched Successfully", "Hello World");
};
