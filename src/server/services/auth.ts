import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const generateToken = (user: any) => {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || "secret", {
    expiresIn: "1d",
  });
};

export const hashPassword = async (password: string) => {
  return await bcryptjs.hash(password, 10);
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcryptjs.compare(password, hashedPassword);
};
