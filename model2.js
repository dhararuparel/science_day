const { Pool } = require("pg"); // Import Pool from pg

// Create a connection pool
const pool = new Pool({
  user: "postgres",
  password: "dhara16", // Replace with environment variable for security
  host: "localhost",
  port: 5433,
  database: "science_day",
});

pool.query(`
  CREATE TABLE StudentModel2 (
    id SERIAL PRIMARY KEY,
    participant1_name VARCHAR(255) NOT NULL,
    participant1_gender VARCHAR(50) NOT NULL,
    participant1_class VARCHAR(50) NOT NULL,
    participant2_name VARCHAR(255),
    participant2_gender VARCHAR(50),
    participant2_class VARCHAR(50),
    accommodation_required BOOLEAN NOT NULL,
    additional_requirements TEXT,
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
