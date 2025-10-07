const mongoose=require("mongoose");

const connectDB= async()=>{
try{
await mongoose
.connect('mongodb://127.0.0.1:27017/testProductDB');
console.log("db is connencted");
}
catch(error){
 console.log("db is not connencted");
    console.log(error);
    process.exit(1);
}

};


module.exports=connectDB;