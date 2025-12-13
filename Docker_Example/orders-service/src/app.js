import express from "express";
import { listOrders, createOrder } from "./ordersController.js";
//-----------
import { logger, validateOrder, errorHandler, checkAuth } from "./middleware.js";
//-----------
const app = express();
app.use(express.json());

// Logger globale
app.use(logger);



app.get("/orders", listOrders);
//app.post("/orders", createOrder);
// Validazione ordine per POST /orders
app.post("/orders", validateOrder, createOrder); //validazione body
// Se vuoi proteggere con auth: app.post("/orders", checkAuth, validateOrder, createOrder);

// Middleware di gestione errori alla fine
app.use(errorHandler);

app.listen(4002, () => console.log("Orders service running on port 4002"));
