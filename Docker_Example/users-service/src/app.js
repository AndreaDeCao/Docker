import express from "express";

const app = express();
app.use(express.json());

// Simuliamo un DB in memoria
let users = [
  { id: 1, name: "Mario Rossi", email: "mario@example.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/login", (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  if (user) res.json({ message: "Login successful", user });
  else res.status(401).json({ message: "Invalid email" });
});

app.listen(4001, () => console.log("Users service running on port 4001"));
