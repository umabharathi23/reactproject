import { useState } from "react";
import axios from "axios";
function Form7(){
    const [formdata, setFormData] = useState({
        name : '', 
        password: '',
       
    
        
    })

    const handleSubmit=(e)=>{
        
        axios.post('http://localhost:2222/addsignup',{formdata}).then((res)=>{
           if(res.status===200){
            alert(res.data.msg)
           }
        })
       e.preventDefault()
       console.log(formdata.name)
       
    }

    return(

        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
            <label>name</label>
        <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormData({...formdata,name:e.target.value})}/><br/><br/>
       
        <label>Password</label>
        <input type="passowrd" name="password" onChange={(e)=>setFormData({...formdata,password:e.target.value})}/><br/><br/>  
        <label></label>
          
                 <input  type="submit" value="submit"/>
            </form>

        </>
    );
}

export default Form7