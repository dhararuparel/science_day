const { Pool } = require("pg"); // Import Pool from pg

// Create a connection pool
const pool = new Pool({
  user: "postgres",
  password: "dhara16", // Replace with environment variable for security
  host: "localhost",
  port: 5433,
  database: "science_day", // This is the database you'll need to create first
});

pool.query(`
  CREATE TABLE Eloquence (
    id SERIAL PRIMARY KEY,
    participant1_name VARCHAR(255) NOT NULL,
    participant1_gender VARCHAR(50) NOT NULL,
    participant1_class VARCHAR(50) NOT NULL,
    accommodation_required BOOLEAN NOT NULL,
    declaration BOOLEAN NOT NULL
  );
`)
  .then(response => {
    console.log("Table created successfully");
    console.log(response);
  })
  .catch(err => {
    console.log("Error:", err);
  });

module.exports = pool;
