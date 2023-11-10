import { useState } from "react";
//import axios from "axios";

function Form1(){
    const [formData, setFormData] = useState({
        name : '', 
        rollno : '',
         email : '',
        college:'',
        branch:'',
        password:'',
        confirmpassword:''
    })
    const[error,seterror]=useState({
        name : '', 
        rollno : '',
         email : '',
        college:'',
        branch:'',
        password:'',
        confirmpassword:'' 
    }) // const handlechange=(e)=>{
    //     setFormData({...formData,[e.target.name]:e.target.value})
    // }
    

    function handleSubmit(e){
        e.preventDefault()
       if(e.target.name.value.length<=0)
       {
        //alert("hi")
        seterror({...error,name:"enter name"})
       }
       else{
        seterror({...error,name:" "})
       }
        if(e.target.rollno.value.length<10){
        alert("please enter 10 digited rollno")
       //"please enter //10 digited rollno"

       }
        if((e.target.college.value)!="ACET" &&  (e.target.college.value)!="AEC" && (e.target.college.value)!="ACOE"){
        alert("please enter correct college name")
       } 
        if((e.target.password.value!=e.target.confirmpassword.value)){
        alert("Passwords should be equal")
       }

          
        
    }

    return(



        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"   onChange={(e)=> setFormData({...formData, rollno: e.target.value})} /> <br />
                {error.name && <p>{error.name}</p>}<br/>
                <label>Roll No</label>
                <input type="text" name="rollno"   onChange={(e) => setFormData({...formData, rollno: e.target.value})} /> <br />
                
                <label>College</label>
                <input type="text" name="college" onChange={(e) => setFormData({...formData, college: e.target.value})}/><br/>
                <label>Password</label>
                <input type="text" name="password" onChange={(e) => setFormData({...formData, password: e.target.value})}/><br/>
                <label>ConfirmPassword</label>
                <input type="text" name="confirmpassword" onChange={(e) => setFormData({...formData, confirmpassword: e.target.value})}/><br/>
                <input  type="submit" name="submit" value="submit" /><br/>
              
            </form>

        </>
    );
}

export default Form1