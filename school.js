const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "dhara16",
  host: "localhost",
  port: 5433,
  database: "science_day",
});

const createTblQry = `
  CREATE TABLE school_details (
    school_id serial PRIMARY KEY,
    coordinator_name VARCHAR(255) NOT NULL,
    coordinator_mobile VARCHAR(15) NOT NULL,
    school_name VARCHAR(255) NOT NULL,
    school_address TEXT NOT NULL,
    city_or_village VARCHAR(100) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    affiliation_number VARCHAR(50) NOT NULL
  );
`;

pool
  .query(createTblQry)
  .then((response) => {
    console.log("School Details Table Created");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;