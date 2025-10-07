const{default:mongoose}=require('mongoose');

const product=new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    createdOn:{
        type:Date,
        default:Date.now

    },
     productionDate: {
    type: Date,
    required: true   
  },
  expireDate: {
    type: Date,
    required: true   
    
  },
  companyName:{
    type:String,
        required:true
  }
    
});
module.exports=mongoose.model("productItem",product);