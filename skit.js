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
  CREATE TABLE Skit (
    id SERIAL PRIMARY KEY,
    
    -- Participant 1 Details
    participant1_name VARCHAR(255) NOT NULL,
    participant1_gender VARCHAR(50) NOT NULL,
    participant1_class VARCHAR(50) NOT NULL,
    
    -- Participant 2 Details
    participant2_name VARCHAR(255) NOT NULL,
    participant2_gender VARCHAR(50) NOT NULL,
    participant2_class VARCHAR(50) NOT NULL,
    
    -- Participant 3 Details
    participant3_name VARCHAR(255) NOT NULL,
    participant3_gender VARCHAR(50) NOT NULL,
    participant3_class VARCHAR(50) NOT NULL,
    
    -- Participant 4 Details
    participant4_name VARCHAR(255) NOT NULL,
    participant4_gender VARCHAR(50) NOT NULL,
    participant4_class VARCHAR(50) NOT NULL,
    
    -- Participant 5 Details
    participant5_name VARCHAR(255) NOT NULL,
    participant5_gender VARCHAR(50) NOT NULL,
    participant5_class VARCHAR(50) NOT NULL,
    
    -- Participant 6 Details
    participant6_name VARCHAR(255) NOT NULL,
    participant6_gender VARCHAR(50) NOT NULL,
    participant6_class VARCHAR(50) NOT NULL,

    -- Common Information
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
