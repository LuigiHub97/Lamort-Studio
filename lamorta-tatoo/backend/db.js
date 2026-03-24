// backend/db.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "lamort",
  host: "localhost",
  database: "lamortdb",
  password: "lamort123",
  port: 5432,
});

export default pool;
