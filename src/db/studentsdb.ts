import { Pool } from 'pg';
import {
  userDB,
  hostDB,
  database,
  passwordDB,
  portDB,
} from '../config';

// const pool = new Pool({
//   user: userDB,
//   host: hostDB,
//   database: database,
//   password: passwordDB,
//   port: parseInt(portDB),
// });

// for Vercel
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
});

export default pool;