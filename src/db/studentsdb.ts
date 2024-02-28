import { Pool } from 'pg';

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student",
  password: "",
  port: 5433,
});

export default pool;