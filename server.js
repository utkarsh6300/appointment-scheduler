// Name, email, phone no, select the date.
const express=require('express');
const connectDB=require('./config/db');

const app=express();
// var cors = require('cors')

// app.use(cors()) 
const userappointment= require('./api/userAppointment');
// const showdetails=require('./api/detailsToShow');
//connect database
connectDB();

// middleware
app.use(express.json({extended:false}));

app.get('/',(req,res)=>{
    res.send('Api Running');
});
app.use('/appointment',userappointment);
// app.use('/api/details',showdetails);

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
});