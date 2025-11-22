import {findEmployees , fetchinsertvalues  ,updateparticularempdetailsquery , deleteparticularempdetailsquery}  from "../model/usermodel.js"


export const fetchEmployeeListService = async (id)=> {
      const employees = await findEmployees(id);
      console.log(employees , "employees")
  return employees;
}

export const  fetchsaveemployeefunc = async( ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE)=> {
  const insertval = await fetchinsertvalues( ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE)
    console.log(insertval , "insertvalinsertval")
      return insertval;
}

export const  updateparticularempdetails = async (EMPID, ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE ) => {
    const updateval = await updateparticularempdetailsquery(EMPID, ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE)
    console.log(updateval , "updatevalupdateval")
      return updateval;
}



export const  Deleteuserid = async (EMPID) => {
    const deleteval = await deleteparticularempdetailsquery(EMPID)
    console.log(deleteval , "deletevaldeleteval")
      return deleteval;
}