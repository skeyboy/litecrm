export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 3000,
  },
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbname: process.env.DB_DBNAME,
  },
});
