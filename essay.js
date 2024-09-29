const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "dhara16",
  host: "localhost",
  port: 5433,
  database: "science_day",
});

const createTblQry = `
  CREATE TABLE essay_competition(
    participant_id serial PRIMARY KEY,
    participant_name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    class VARCHAR(10) NOT NULL,
    requires_accommodation BOOLEAN DEFAULT FALSE,
    essay_pdf_path VARCHAR(255) NOT NULL,
    declaration BOOLEAN NOT NULL
  );
`;

pool
  .query(createTblQry)
  .then((response) => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;