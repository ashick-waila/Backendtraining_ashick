import { fetchEmployeeListService , fetchsaveemployeefunc ,
  updateparticularempdetails , Deleteuserid
} from "../service/userservice.js";

export const fetchemployeelist = async (req, res) => {
  try {
    const { id } = req.query;   


    const data = await fetchEmployeeListService(id);
    console.log(data , "datadatadata")

    res.status(200).json({
      message: "Employee fetched successfully",
      time: new Date().toISOString(),
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
export  const saveemployeelist  = async (req, res)=> {
   console.log("🔥req124:", req);

  try {
  const {EMPID,  ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE } = req.body; 
   console.log("🔥req:", req);
console.log(ENAME , SAL , "SALSALSAL" )
if(!EMPID|| !ENAME || !JOB || !SAL || !DEPTNO || !MGR || !HIREDATE) return res.status(400).json({error:  "ename and SAL are required" })

const saveemployee =  await fetchsaveemployeefunc(EMPID,  ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE )
console.log(saveemployee , "saveemployee")

    res.status(200).json({
      message: "Employee inserted successfully",
      time: new Date().toISOString(),
      saveemployee,
    });

  }catch (error){
    console.log("🔥 ERROR:", error);
       res.status(500).json({ error: "Something went wrong" });
  }
``
}
export const Updateparticularemployee = async (req , res)=> {
  try{
const {EMPID,ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE} = req.body

console.log(ENAME , SAL , "SALSALSAL" )
if(!EMPID ||!ENAME || !JOB || !SAL || !DEPTNO || !MGR || !HIREDATE) return res.status(400).json({error:  "ename and SAL are required" })

const saveemployeeparticular =  await updateparticularempdetails(EMPID, ENAME, JOB, SAL, DEPTNO, MGR, HIREDATE )
console.log(saveemployeeparticular , "saveemployeeparticular")

    res.status(200).json({
      message: "Employee inserted successfully",
      time: new Date().toISOString(),
      saveemployeeparticular,
    });


  }catch (error){
     console.log("🔥 ERROR:", error);
       res.status(500).json({ error: "Something went wrong" });
  }
}
export const DELETEparticularemployee = async (req, res) => {
  try {
    const { EMPID } = req.body;   
    console.log(EMPID , "ididid")


    const data = await Deleteuserid(EMPID);
    console.log(data , "datadatadata")

    res.status(200).json({
      message: "Employee fetched successfully",
      time: new Date().toISOString(),
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};


