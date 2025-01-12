const express = require('express');

const app = express();

console.log("hello")

app.get("/user",(req,res)=>{
  res.send("Route Handler 1")
})

app.listen(3000,()=>{
  console.log("server is listening on port 7777")
})