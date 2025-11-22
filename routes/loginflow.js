import express from "express"
import {registersignin , getlogineduserdetails} from "../controller/loginregister.js"


const router = express.Router();
console.log(router , "router")

router.post("/loginuserregister" , registersignin)
router.post("/loginuser" , getlogineduserdetails)
export default router
