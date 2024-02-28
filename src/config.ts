import 'dotenv/config';

type AppConfig = {
  userDB: string;
  hostDB: string;
  database: string;
  passwordDB: string;
  portDB: string;
  vercelPostgres: string;
  PORT: string;
};

export const userDB = process.env.USER_DB;
export const hostDB = process.env.HOST_DB;
export const database = process.env.DATABASE;
export const passwordDB = process.env.PASSWORD_DB;
export const portDB = process.env.PORT_DB;
export const vercelPostgres = process.env.POSTGRES_URL;
export const PORT = process.env.APP_PORT;

export default {
  userDB,
  hostDB,
  database,
  passwordDB,
  portDB,
  vercelPostgres,
  PORT,
} as AppConfig;