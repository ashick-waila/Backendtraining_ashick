import { fetchemployeelist  , saveemployeelist , Updateparticularemployee , DELETEparticularemployee} from "../controller/employerlist.js"
import express from "express"
// import * as all from "../controller/employerlist.js";

console.log("Resolved path:", import.meta.url);


const router = express.Router();

router.get("/" , fetchemployeelist)
router.get("/:id", fetchemployeelist);
router.post("/Update_employee" , saveemployeelist)
router.patch("/Update_particularemployee" , Updateparticularemployee )
router.delete("/DELETE_particularemployee" , DELETEparticularemployee )


export default router