import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "Missing token" });

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, "MYSECRET");
    req.user = decoded;
    next();
  } catch (_) {
    res.status(403).json({ error: "Invalid token" });
  }
}
