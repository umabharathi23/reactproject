import { useState } from "react";
import axios from "axios";
function Userform(){
    const [formData, setFormData] = useState({
        'username' : '', 
        'password':'',

    })

    function handleSubmit(event){
        event.preventDefault()
    
        console.log(formData);
        axios.post('http://localhost:2222/adduser',{formData}).then((res)=>
        alert(res.data.msg))

          
        
    }

    return(



        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input type="text" name="username"    onChange={(e) => setFormData({...formData, username: e.target.value})} /> <br />
                <label>password</label>
                <input type="text" name="password"   onChange={(e) => setFormData({...formData, password: e.target.value})} /> <br />

                <input type="submit" value="submit"/>
                
               
            </form>

        </>
    );
}

export default Userform;