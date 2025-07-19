import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT = 10;
const secret = process.env.JWT_SECRET || "your-secret-key";

async function hashPassword(rawPassword) {
  return bcrypt.hash(rawPassword, SALT);
}

async function comparePassword(rawPassword, hashedPassword) {
  return bcrypt.compare(rawPassword, hashedPassword);
}

function generateToken(payload, options = { expiresIn: "5m" }) {
  return jwt.sign(payload, secret, options);
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        reject(err);
      } else {
        resolve(payload);
      }
    });
  });
}

export const authService = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
