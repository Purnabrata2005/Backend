import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validat = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }

  const extractedErrors = [];
  errors.array().map((err) =>
    extractedErrors.push({
      [err.path]: err.msg,
    }),
  );

  throw new ApiError(422, "Data Validation Error",extractedErrors);

};
