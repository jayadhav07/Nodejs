const express = require("express");

const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

// app.use(express.json());

app.use((req,res,next)=>{
  console.log("middleware chala")
  next();
})

app.use((req,res,next)=>{
  console.log("middleware chala 2nd")
  next();
})

app.get("/user",(req,res)=>{
  res.send({
    firstName: "Jay",
    lastName: "Adhav"
  });
})

app.post("/user",(req,res)=>{
  console.log(req.body);
  res.send("Data send successfully!");
})

app.delete("/user",(req,res)=>{
res.send("Data deleted successfully!");
})
  
app.listen(3001,()=>{
  console.log("Server is running on port 3001");
})
 



// app.post("/signup", async (req, res) => {
//   const user = new User(req.body);
//   try {
//     await user.save();
//     res.status(201).send("User registered successfully");
//   } catch (err) {
//     res.status(500).send("Server Error" + err.message);
//   }
// });

// connectDB()
//   .then(() => {
//     console.log("Database connection established");
//     app.listen(7777, () => {
//       console.log("server is listening on port 7777");
//     });
//   })
//   .catch((error) => {
//     console.log("Database cannot be established");
//   });
