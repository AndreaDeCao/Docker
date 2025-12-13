import pkg from "pg";
const { Pool } = pkg;

export const db = new Pool({
  host: process.env.DB_HOST_USERS,
  user: process.env.DB_USER_USERS,
  password: process.env.DB_PASS_USERS,
  database: process.env.DB_NAME_USERS,
  port: 5432
});