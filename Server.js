import express from "express"
import cors from "cors";
import  employeeroutes  from "./routes/employeroutes.js"
import loginroute from "./routes/loginflow.js"

// const app  = express()
// const port = 5000
// app.get("/" , (req, res)=> {
//     res.send("am  listening")
// })
// app.listen(port , ()=> {
// console.log( `The server is running${port}`)
// })




const app = express();
app.use(cors({
 origin: "http://localhost:3000"
})); 

app.get("/hello", (req, res) => {
  res.send("Hacked! ₹1000000 credited 😈");
});
app.use(express.json());
app.use("/employees", employeeroutes);
app.use("/loginroute" , loginroute)

app.listen(5000, () => console.log("Server running on 5000"));
