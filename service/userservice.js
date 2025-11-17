import {findEmployees}  from "../model/usermodel.js"


export const fetchEmployeeListService = async (id)=> {
      const employees = await findEmployees(id);
      console.log(employees , "employees")
  return employees;
}