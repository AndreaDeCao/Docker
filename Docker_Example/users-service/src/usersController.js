import { db } from "./db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function listUsers(req, res) {
  const users = await db.query("SELECT id, email FROM users");
  res.json(users.rows);
}

export async function register(req, res) {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await db.query("INSERT INTO users (email, password) VALUES ($1,$2)", [
    email,
    hashed
  ]);
  res.json({ message: "User registered" });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);

  if (result.rows.length === 0)
    return res.status(404).json({ error: "User not found" });

  const user = result.rows[0];

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(403).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, email }, "MYSECRET");

  res.json({ token });
}
