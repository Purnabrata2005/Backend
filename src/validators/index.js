import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .isEmail().withMessage("Please enter a valid email address")
      .notEmpty().withMessage("Please enter an email address"),
    body("password")
      .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
    body("username")
      .trim()
      .isLength({ min: 3 }).withMessage("Username must be at least 3 characters long")
      .isLength({ max: 20 }).withMessage("Username must be at most 20 characters long"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email")
      .trim()
      .isEmail().withMessage("Please enter a valid email address")
      .notEmpty().withMessage("Please enter an email address"),
    body("password")
      .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
  ];
};


export { userRegisterValidator , userLoginValidator };