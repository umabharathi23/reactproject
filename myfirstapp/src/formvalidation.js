import { useState } from "react";
//import axios from "axios";

function Form1(){
    const [formData, setFormData] = useState({
        name : '', 
        rollno : '',
         email : '',

        college:'',
        branch:''
    })

    function handleSubmit(event){
        event.preventDefault()
    
        //console.log(formData);
        //axios.post('http://localhost:2222/addstudent',{formData}).then((res)=>
       // console.log(res.data))
        //alert(res.data.msg)
        setFormData(formData)
        if(college.length<=5){
            alert("no")
        }

          
        
    }

    return(



        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"    onChange={(e) => setFormData({...formData, name: e.target.value})} /> <br />
                <label>Roll No</label>
                <input type="text" name="rollno"   onChange={(e) => setFormData({...formData, rollno: e.target.value})} /> <br />
                <label>Email</label>
                <input type="email" name="email"  onChange={(e) => setFormData({...formData, email: e.target.value})} /> <br />
               
                <label>College</label>
                <input type="text" name="college" onChange={(e) => setFormData({...formData, college: e.target.value})}/><br/>
                {/* //<label>Branch</label> */}
                <input  type="submit" name="submit" value="submit" /><br/>
            </form>

        </>
    );
}

export default Form1