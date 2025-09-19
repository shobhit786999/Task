import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StudentFrom/test.css"
function Test(){
    const [data,setdata] = useState({name :'', branch : '',email : '', phone : '', hadding :""});
    function handlechange(e){
        console.log('event:','e.target.name:',e.target.name,e.target.value);
        setdata({...data,[e.target.name]:e.target.value});
        console.log(e.target.name,e.target .value);
        
    }
    function handlesubmit(){
        console.log("formdata",data);
    }
   
    return (
        <div className="Container">
            <h4>Display Data : { data.name}</h4>
            <label>Name</label>
             <input 
                type="text"
                name="name"
                value={data.name}
                onChange={handlechange}
           />
           <label>Branch</label>
           
            <input type="text"
            name="branch"
            value = {data.branch}
            onChange = {handlechange}
            />
            <label>Email</label>
            
            <input type="email"
            name="email"
            value = {data.email}
            onChange = {handlechange}/>
                
            <label>Phone No.</label>
            <input type="number"
            name="phone"
            value ={ data.phone}
            onChange = {handlechange}/>

          
            <button className="btn-sub" onClick={handlesubmit}>submit</button>
            
                
            
        </div>

    )
}
export default Test