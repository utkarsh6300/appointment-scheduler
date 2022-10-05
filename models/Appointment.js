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
        type: String,
        required:true,
        default:Date.now
    }
});

module.exports=Appointment=mongoose.model('userAppointment',UserAppointmentSchema);