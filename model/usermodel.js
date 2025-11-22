import { pool } from "../db.js";
import sql from "mssql";

export const findEmployees = async (id) => {
  const request = pool.request();
  request.input("id", sql.Int, id);

  const result = await request.query(`
     SELECT * FROM emp WHERE EMPID = @id`);
  return result[0];
};

export const fetchinsertvalues = async (
  ENAME,
  JOB,
  SAL,
  DEPTNO,
  MGR,
  HIREDATE
) => {
  const request = pool.request();
  request.input("ENAME", sql.VarChar, ENAME);
  request.input("SAL", sql.Int, SAL);
  request.input("DEPTNO", sql.Int, DEPTNO);
  request.input("JOB", sql.VarChar, JOB);
  request.input("MGR", sql.Int, MGR);
  request.input("HIREDATE", sql.DateTime, HIREDATE);
  const result = await request.query(
    `INSERT INTO emp VALUES (@ename, @JOB, @SAL, @DEPTNO, @MGR, @HIREDATE )`
  );
  return result;
};

export const updateparticularempdetailsquery = async (
  EMPID,
  ENAME,
  JOB,
  SAL,
  DEPTNO,
  MGR,
  HIREDATE
) => {
  const request = pool.request();
  request.input("EMPID", sql.Int, EMPID);
  request.input("ENAME", sql.VarChar, ENAME);
  request.input("SAL", sql.Int, SAL);
  request.input("DEPTNO", sql.Int, DEPTNO);
  request.input("JOB", sql.VarChar, JOB);
  request.input("MGR", sql.Int, MGR);
  request.input("HIREDATE", sql.DateTime, HIREDATE);
  const result = await request.query(
    `UPDATE emp SET ENAME = @ename,
  JOB = @JOB,
  SAL = @SAL,
  DEPTNO = @DEPTNO,
  MGR = @MGR,
  HIREDATE = @HIREDATE
  WHERE  EMPID = @EMPID`
  );
  return result;
};




export const deleteparticularempdetailsquery = async (
  EMPID
) => {
  const request = pool.request();
  request.input("EMPID", sql.Int, EMPID);
  const result = await request.query(
    `DELETE FROM  emp WHERE EMPID = @EMPID`
  );
  return result;
};
