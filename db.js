import sql from "mssql";
// console.log(sql , "sqlsql")

const config = {
  user: "lms_user",                 
  password: "Lms@1234",  
  server: "DESKTOP-OTSS24R",  
  database: "master", 
  options: {
    trustServerCertificate: true,
  },
};

// console.log(config , "configconfig")

let pool;

async function connectToDatabase() {
  try {
    pool = await sql.connect(config);
    console.log("Connected to SQL Server");
    const result = await pool.request().query(`select * from EMP`)
    console.log(result , "result")
  } catch (err) {
    console.error("Database Connection Failed!", err);
  }
}

connectToDatabase();

export { sql, pool };
