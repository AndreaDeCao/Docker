// middleware.js
// Middleware comuni per Orders service

// Logger: logga tutte le richieste
export function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next(); // passa al prossimo middleware / route handler
}

// 2Validazione ordine: controlla body di POST /orders
export function validateOrder(req, res, next) {
  const { item, quantity } = req.body;

  if (!item || typeof item !== "string") {
    return res.status(400).json({ error: "Item is required and must be a string" });
  }

  if (!quantity || typeof quantity !== "number") {
    return res.status(400).json({ error: "Quantity is required and must be a number" });
  }

  next(); // tutto ok, passa al controller
}

// Gestione errori centralizzata
export function errorHandler(err, req, res, next) {
  console.error(`[ERROR] ${req.method} ${req.url} - ${err.stack}`);
  res.status(500).json({ error: "Internal Server Error" });
}

// Autenticazione semplice (opzionale)
export function checkAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }
  // esempio semplice: "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token || token !== "secrettoken") {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
}



// // middleware.js

// // Logger: tutte le richieste
// export function logger(req, res, next) {
//   console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
//   next();
// }

// // Validazione body POST /orders
// export function validateOrder(req, res, next) {
//   const { item, quantity } = req.body;
//   if (!item || typeof item !== "string") {
//     return res.status(400).json({ error: "Item is required and must be a string" });
//   }
//   if (!quantity || typeof quantity !== "number") {
//     return res.status(400).json({ error: "Quantity is required and must be a number" });
//   }
//   next();
// }

// // Gestione errori centrale
// export function errorHandler(err, req, res, next) {
//   console.error(`[ERROR] ${req.method} ${req.url} - ${err.stack}`);
//   res.status(500).json({ error: "Internal Server Error" });
// }
