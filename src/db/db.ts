import { join } from "path";
import Database from "better-sqlite3";

// Create or connect to the database
const dbPath = join(process.cwd(), "src/db/mydb.sqlite");

const db = new Database(dbPath);

// Example: create a table if it doesn't exist

/* Create class table if not existent 
db.prepare(`
  CREATE TABLE IF NOT EXISTS class (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    level INT NOT NULL,
    abbreviation TEXT NOT NULL
  )
`).run(); */

/*  Create student table if not existent
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
class_id INTEGER,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    birth_date INT NOT NULL,
    address TEXT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES class(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
  )
`
).run();
 */

export default db;
