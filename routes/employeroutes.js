import { fetchemployeelist } from "../controller/employerlist.js"
import express from "express"
import * as all from "../controller/employerlist.js";
console.log("All exports:", all);

console.log("Resolved path:", import.meta.url);













const router = express.Router();

console.log(fetchemployeelist, "fetchemployeelistfetchemployeelist")

router.get("/" , fetchemployeelist)
router.get("/:id", fetchemployeelist);

export default router