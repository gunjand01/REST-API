require("dotenv").config()
const express = require('express');
const app=express();
const resultRouter = require("./api/result/result.route.js")


// app.get("/api", (req,res)=>{
//     res.json({
//         success: 1,
//         message: "This is rest api working"
//     });
// });

app.use(express.json());
app.use("/api/result", resultRouter);

app.listen(3000 , ()=>{
    console.log("Server is up and running on PORT : ",3000);
});
