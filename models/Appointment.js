// Name, email, phone no, select the date. 
const mongoose=require('mongoose');

const UserAppointmentSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique: true
    },
    phone:{
        type:Number,
        required:true,
        unique: true
    },
    day:{
        type: Date,
        required:true,
        default:"2022-01-22T13:35:00.000+00:00"
    }
});

module.exports=Appointment=mongoose.model('userAppointment',UserAppointmentSchema);