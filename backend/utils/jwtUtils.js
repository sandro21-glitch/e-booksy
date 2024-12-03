import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export const generateJWT = (user, res) => {
  const expirationTime = Date.now() + 3600000;

  const payload = {
    userId: user._id,
    name: user.name
  };

  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: "1h",
  });

  // Set the cookie (JWT with HttpOnly)
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    expires: new Date(expirationTime),
  });

  return { token };
};
