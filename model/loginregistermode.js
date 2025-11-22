import { pool } from "../db.js";
import sql from "mssql";


export const checkEmailExists = async (Email) => {
  const request = pool.request();
  request.input("Email", sql.VarChar, Email);

  const result = await request.query(`
    SELECT email FROM Usersemployee WHERE email = @Email
  `);

  return result.recordset.length > 0; 
};

export const insertregisteredquery = async (Email, hashedpassword, username,) => {
  const request = pool.request();
  request.input("Email", sql.VarChar, Email);
  request.input("password", sql.VarChar, hashedpassword);
  request.input("username", sql.VarChar, username);

  const result = await  request.query(`Insert into Usersemployee (username , email , password , created_at ) 
  values (@username, @Email, @password, GETUTCDATE())`);
  console.log(result, "resultresult");
  return result 
};

export const fetchuserdetails = async (Email) => {
    const request =  pool.request();
     request.input("Email" , sql.VarChar, Email)
     
const fetchedvalue =  await request.query(`
      select * from Usersemployee where Email = @Email
`)
console.log(fetchedvalue , "fetchedvaluefetchedvalue")
return fetchedvalue
}
