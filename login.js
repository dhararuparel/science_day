const { Pool } = require("pg"); 


const pool = new Pool({
    user: "postgres",           
    password: "dhara16",   
    host: "localhost",          
    port: 5433,                
    database: "science_day",
});


const createTblQry = `
    CREATE TABLE IF NOT EXISTS login_details (
        school_id SERIAL PRIMARY KEY,
        school_name VARCHAR(150) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
    );
`;


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