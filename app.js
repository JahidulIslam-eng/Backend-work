const express=require('express');
const app=express();
const path=require('path');
require("./config/db");
const userRouter=require('./routes/route');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api",userRouter);

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"./views/index.html"));
});


app.use((req,res)=>{
res.status(404).send("route not found")
});



module.exports=app;