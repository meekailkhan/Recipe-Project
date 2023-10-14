const path = require("path")

const express = require("express");
const app = express();
const port = 17000;


const staticPath = path.join(__dirname,("./route"))
app.use(express.static(staticPath))


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,("./route","index.html")))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,("./route","about.html")))
})

app.listen(port,()=>{
    console.log(`this web port is ${port}`)
})