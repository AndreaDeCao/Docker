// import { db } from "./db.js";

// export async function listOrders(req, res) {
//   const orders = await db.query("SELECT * FROM orders");
//   res.json(orders.rows);
// }

// export async function createOrder(req, res) {
//   const { user_id, product, amount } = req.body;

//   await db.query(
//     "INSERT INTO orders (user_id, product, amount) VALUES ($1,$2,$3)",
//     [user_id, product, amount]
//   );

//   res.json({ message: "Order created" });
// }
// ordersController.js
import { db } from "./db.js";

// Restituisce tutti gli ordini
export async function listOrders(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM orders ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
}

// Crea un nuovo ordine
export async function createOrder(req, res, next) {
  try {
    const { item, quantity } = req.body;
    const result = await db.query(
      "INSERT INTO orders(item, quantity) VALUES($1, $2) RETURNING *",
      [item, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
}
