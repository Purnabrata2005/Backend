import { asyncHandler } from "../utils/async-handler";
import { validat } from "../middlewares/validator.middlewares";


const registerUser = asyncHandler(async (req, res) => {
  const { email, password, username, role } = req.body;

  validat(body);
});

export { registerUser };
