import {pool} from "../db.js"
import sql from "mssql";



export const findEmployees = async (id) => {
  const request = pool.request();
  request.input("id", sql.Int, id);

  const result = await request.query(`
     SELECT * FROM emp WHERE EMPID = @id`)
  return result[0]

}