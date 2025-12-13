import express from "express";
import router from "./routes.js";

const app = express();
app.use(express.json());

// Root check
app.get("/", (req, res) => {
  res.send("API Gateway OK - Microservices running");
});

// API routes
app.use("/api", router);

app.listen(4000, () => {
  console.log("API Gateway running on port 4000");
});

router.get("/orders", async (req, res) => {
  try {
    const response = await axios.get(`${ORDERS_SERVICE}/orders`);
    res.json(response.data);
  } catch (err) {
    console.error("Error connecting to Orders service:", err.message);
    res.status(503).json({ error: "Orders service unavailable" });
  }
});
