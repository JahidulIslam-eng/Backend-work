const productItem=require("../models/model");
const {v4:uuidv4}=require('uuid');

getUser=async(req,res)=>{

try{
const items=await productItem.find().sort({'price': -1});

res.status(200).json(items);
}catch(error){
res.status(400).send(error.massage);
}
    
};

getOneUser=async(req,res)=>{

try{
const item=await productItem.findOne({id:req.params.id});
res.status(200).json(item);
}catch(error){
res.status(400).send(error.massage);
}
    
};


postUser=async(req,res)=>{
  
 // let newItem;
try{
const newItem=new productItem({
    id:uuidv4(),
    name:req.body.name,
    price:Number(req.body.price),
    companyName:req.body.companyName,
    productionDate:req.body.productionDate,
    expireDate:req.body.expireDate
});
const savedItem=await newItem.save();
 res.status(201).json({ message: "Product added", product: savedItem });
}catch(error){
res.status(400).send(error.message);
}  
};

putUser=async(req,res)=>{
try{
const Product=await productItem.findOne({id:req.params.id});

Product.price=Number(req.body.price);
const savedItem=await Product.save();
 res.status(200).json({ message: "Product updated", product: savedItem });

}catch(error){
res.status(400).send(error.message);
}
res.status(200).json({
  message:"product is updated"
});
};

deleteUser=async(req,res)=>{
try{
const product1=await productItem.deleteOne({id:req.params.id});
res.status(202).json(product1);
}catch(error){
res.status(400).send(error.message);
}
res.status(200).json({
  message:"product is deleted"
});
};





module.exports={getUser,postUser,putUser,deleteUser,getOneUser};