const user = 'admin';
const password = 'admin';
const hostname = 'localhost';
const dbname = 'mydb';

export const connectionString =
  process.env.DATABASE_URL || 'postgres://' + user + ':' + password + '@' + hostname + '/' + dbname;
