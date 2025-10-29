import { join } from 'path';
import Database from 'better-sqlite3';

// Create or connect to the database
const dbPath = join(process.cwd(), 'src/db/mydb.sqlite');

const db = new Database(dbPath);

// Example: create a table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    birth_date INT NOT NULL,
    address TEXT NOT NULL
  )
`).run();
console.log('db created', dbPath);
export default db;
