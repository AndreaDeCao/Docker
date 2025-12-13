--inizializzo un db di esempio
-- se non esiste lo creo
-- orders-service/db/init.sql
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  quantity INTEGER NOT NULL
);
