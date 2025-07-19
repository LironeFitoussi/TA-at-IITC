import { authService } from "./auth.service.js";

export async function authMiddleware(req, res, next) {
  const authHeaders = req.headers.authorization;
  if (!authHeaders) {
    return res.status(401).json({ message: "Missing authorization header" });
  }

  const token = authHeaders.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Missing token" });
  }

  try {
    const payload = await authService.verifyToken(token);
    req.user = { username: payload.username };
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
}
