//const express=require('express');
const app=require("./app");
const port=1011;
const connectDB=require('./config/db')

 connectDB().then(()=>{
app.listen(port,()=>
  
    console.log(`server running at${port}`));
});

