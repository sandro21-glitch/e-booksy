import User from "../models/userModel.js";
import { generateJWT } from "../utils/jwtUtils.js";

// Register user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    generateJWT(user,res);

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: { name: user.name, email: user.email, userId: user._id },
    });
  } catch (error) {
    console.error("Error occurred during user registration:", error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message || error,
    });
  }
};

// Login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("user not found");
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).send("invalid credentials");
    }

    const token = generateJWT(user,res);

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//user logout
export const logout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logout successfully" });
};

//get user
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId, "-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (typeof req.body.isAuthor === "boolean")
      user.isAuthor = req.body.isAuthor;

    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
