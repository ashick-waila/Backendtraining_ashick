import express from "express"

const app  = express()
const port = 5000
app.get("/" , (req, res)=> {
    res.send("am  listening")
})
app.listen(port , ()=> {
console.log( `The server is running${port}`)
})