import Header from "./components/Header";
import AddAppointment from "./components/AddAppointment";
import axios from "axios";

// import { useState,useEffect } from "react";

function App() {

// const AddAppointment=({name,email,phone,day})=>{
// 
//  console.log(name);
// };
// console.log(AddAppointment);
const AddApnt=async({name,email,phone,day})=>{
  // console.log(JSON.stringify(tsk));
  try {
    
    // const res=await fetch('http://localhost:5000/appointment',
    // {
    //   method:'POST',
    //   headers:{
    //     'Content-type':'application/json'
    //   },
    //   body:JSON.stringify(tsk)
    // }
    // );
    
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({ name, email, phone,day });
    const res = await axios.post('/appointment', body, config);
    console.log(res);
    
  } catch (error) {
    console.log(error);
    
  }

 
};
  return (
    <div className="App">
        <Header/>
        <AddAppointment onAdd={AddApnt}/>
    </div>
  );
}

export default App;
