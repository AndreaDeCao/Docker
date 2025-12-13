import axios from "axios";
import { Router } from "express";

const router = Router();

const USERS_SERVICE = "http://users:4001";
const ORDERS_SERVICE = "http://orders:4002";

// Retry helper
async function fetchWithRetry(method, url, data = null, retries = 5, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      if (method === "get") return await axios.get(url);
      if (method === "post") return await axios.post(url, data);
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

// Users routes
router.get("/users", async (req, res) => {
  try {
    const response = await fetchWithRetry("get", `${USERS_SERVICE}/users`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(502).json({ error: "Users service unavailable" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const response = await fetchWithRetry("post", `${USERS_SERVICE}/login`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error login:", error.message);
    res.status(502).json({ error: "Users service unavailable" });
  }
});

// Orders routes
router.get("/orders", async (req, res) => {
  try {
    const response = await fetchWithRetry("get", `${ORDERS_SERVICE}/orders`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(502).json({ error: "Orders service unavailable" });
  }
});

router.post("/orders", async (req, res) => {
  try {
    const response = await fetchWithRetry("post", `${ORDERS_SERVICE}/orders`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(502).json({ error: "Orders service unavailable" });
  }
});

export default router;
