const User = require("../models/User");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");
const {hashPassword} = require("../utils/password"); 


// Registration....................................
const register = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body;

  if (!name || !email || !password) {
    throw new AppError (
      "Name, email and password are required", 400
    );
  }

  const existingUser = await User.findOne({ email });
  if (existingUser)  {
    throw new AppError (
      "User with this eamil already exists", 409
    );
  }
  
  const hashedPassword = await hashPassword(password);
  
  const user = await User.create({
    name, email, password
  });

  res.status(201).json({
    status: "success",
    message: "User registered successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified
    }
  });
});

module.exports = {register};