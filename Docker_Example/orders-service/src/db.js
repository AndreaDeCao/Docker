// import pkg from "pg";
// const { Pool } = pkg;

// export const db = new Pool({
//   host: process.env.DB_HOST_ORDERS,
//   user: process.env.DB_USER_ORDERS,
//   password: process.env.DB_PASS_ORDERS,
//   database: process.env.DB_NAME_ORDERS,
//   port: 5432
// });
// db.js
import pkg from "pg";
const { Pool } = pkg;

export const db = new Pool({
  host: process.env.DB_HOST_ORDERS || "db-orders", // default per docker-compose
  user: process.env.DB_USER_ORDERS || "postgres",
  password: process.env.DB_PASS_ORDERS || "postgres",
  database: process.env.DB_NAME_ORDERS || "ordersdb",
  port: 5432
});

// Test di connessione all'avvio
db.connect()
  .then(() => console.log("Connected to Orders DB"))
  .catch(err => {
    console.error("Failed to connect to Orders DB:", err.stack);
    process.exit(1); // termina se DB non raggiungibile
  });
