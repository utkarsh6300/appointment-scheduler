import { useState } from "react";

const AddAppointment = ({onAdd}) => {
  
    const [name,setName]=useState('');
    const [day,setDay]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
const onSubmit= (e)=>{
    e.preventDefault();
   
    onAdd({name,email,phone,day});
   setPhone('');
   setDay('');
   setEmail('');
   setName('');
};

    return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label> 
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div className='form-control'>
        <label>Number</label>
        <input type="number" placeholder='Enter phone number' value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
      </div>
      <div className='form-control d-ate'>
        <label>DateTime</label> 
        <input type="datetime-local" placeholder='Add day and time' value={day} onChange={(e)=>{setDay(e.target.value)}} required/>
      </div>
      
<input type="submit" value="Add" className='btn btn-block' />
     
    </form>
    )
}

export default AddAppointment
