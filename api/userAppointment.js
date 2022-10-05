const express=require('express');
const router=express.Router();

const User=require('../models/Appointment');


const { check ,validationResult}=require('express-validator');
const config=require('config');




 const date1=new Date().toLocaleString();
router.post('/',[
    check('name','name required')
     .not()
     .isEmpty(),
    check('email','invalid email').isEmail(),
    check('phone','invalid phone number').isMobilePhone()
   
  ],
async(req,res)=> {

   const errors=validationResult(req);
   if(!errors.isEmpty()){
    console.log(errors);
       return res.status(400).json({ errors:errors.array()})
   }

   const { name,email, phone,day }=req.body;

   try{

   // see if user exists
  let user=await User.findOne({ email }) || await User.findOne({ phone });
   
  if(user){
    return  res.status(400).json({errors:[{ msg:'user already exists' }]});
    }

 
    user=new User({
        name,
        email,
       phone,
       day
      });

     const result= await user.save();
     if(!result) res.status(500).json({errors:[{ msg:'user not registered' }]});
      res.status(201).json({success:[{ msg:'user registered' }]});
    //   res.send('user registered');
   }
     catch(err){
       console.error(err.message);
       res.status(500).send('server error');
     }


});

module.exports=router;