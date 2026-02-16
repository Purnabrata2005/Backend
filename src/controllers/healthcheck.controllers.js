import { ApiResponse } from "../utils/api-response.js";

const helthCheckController = (req, res) => {
  res.status(200).json(new ApiResponse(200, "Server is up and running", {}));
};

export { helthCheckController };
