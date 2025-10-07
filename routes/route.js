const { getUser, postUser, putUser, deleteUser,getOneUser } = require('../controllers/controlers');
const { body, validationResult } = require("express-validator");
const router=require('express').Router();


const validateProduct = [
  body("name")
    .notEmpty().withMessage("Product name is missing")
    .escape()
    .trim(),

  body("price")
    .notEmpty().withMessage("Price is missing")
    .isNumeric().withMessage("Price must be a number")
    .toFloat(),

  body("companyName")
    .notEmpty().withMessage("Company name is missing")
    .escape()
    .trim(),

  body("productionDate")
    .notEmpty().withMessage("Production Date is missing")
    .isISO8601().withMessage("Production Date is not a valid date")
    .toDate(),

  body("expireDate")
    .notEmpty().withMessage("Expire Date is missing")
    .isISO8601().withMessage("Expire Date is not a valid date")
    .toDate()
];


router.get("/",getUser);
router.get("/:id",getOneUser);

router.post("/",validateProduct,
  (req,res,next)=>{
        
 const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  next();
}
   
,postUser);
router.put("/:id",putUser);

router.delete("/:id",deleteUser);






module.exports=router;