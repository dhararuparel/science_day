const { Pool } = require("pg"); // PostgreSQL client

// Create a new pool instance for database connection
const pool = new Pool({
    user: "postgres",           // your PostgreSQL username
    password: "dhara16",   // your PostgreSQL password
    host: "localhost",          // database host (local machine in this case)
    port: 5433,                 // default port for PostgreSQL
    database: "science_day",    // your database name
});

// SQL query to create the table school_details
const createTblQry = `
    CREATE TABLE IF NOT EXISTS school_details (
        coordinator_id SERIAL PRIMARY KEY,
        coordinator_name VARCHAR(100) NOT NULL,
        coordinator_mobile VARCHAR(15) NOT NULL,
        school_name VARCHAR(150) NOT NULL,
        school_address TEXT NOT NULL,
        school_city VARCHAR(100) NOT NULL,
        school_pincode VARCHAR(10) NOT NULL,
        school_affiliation_number VARCHAR(50) NOT NULL
    );
`;

// Execute the query to create the table
pool.query(createTblQry)
    .then((response) => {
        console.log("Table school_details Created Successfully!");
    })
    .catch((err) => {
        console.error("Error Creating Table:", err);
    })
    .finally(() => {
        pool.end(); // close the pool connection when done
    });

module.exports =pool;