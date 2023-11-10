import { useState } from "react";
//import axios from "axios";

function Bank(){
    const [formData, setFormData] = useState({
        name : '', 
        phoneno : '',
         email : '',
        college:'',
        branch:'',
        password:'',
        confirmpassword:''
    })
    const[error,seterror]=useState({
        name : '', 
        phoneno : '',
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
        if(e.target.phoneno.value.length<=0 || e.target.phoneno.value.length<10){
            seterror({...error,phoneno:"enter a 10 digited phonenumber"})

        }
       else{
        seterror({...error,phoneno:" "})
       }
       if(e.target.email.value.length<=0 ){
        seterror({...error,email:"email is required"})

       }
      else{
       seterror({...error,email:" "})
       }

   if (e.target.value==" "){
    alert("hi")
   }

        
       
    //     if(e.target.confirmpassword.value!=e.target.password.value){
    //         seterror({...error,confirmpassword:"passwords should be equal"})

    //     }
    //    else{
    //     seterror({...error,confirmpassword:" "})
    //    }

}  
        
    

    return(



        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"   onChange={(e)=> setFormData({...formData, rollno: e.target.value})} /> <br />
                {error.name && <p style={{color:"red"}}>{error.name}</p>}<br/>
                <label>PhoneNo</label>
                <input type="number" name="phoneno"   onChange={(e) => setFormData({...formData, phoneno: e.target.value})} /> <br />
                {error.phoneno && <p style={{color:"red"}}>{error.phoneno}</p>}<br/>
                <label>Email</label>
                <input type="text" name="email"   onChange={(e) => setFormData({...formData, email: e.target.value})} /> <br />
                {error.email && <p style={{color:"red"}}>{error.email}</p>}<br/>
                <label>Password</label>
                <input type="text" name="password" onChange={(e) => setFormData({...formData, password: e.target.value})}/><br/><br/>
                <label>ConfirmPassword</label> 
                <input type="text" name="confirmpassword" onChange={(e) => setFormData({...formData, confirmpassword: e.target.value})}/><br/>
                {error.confirmpassword && <p style={{color:"red"}}>{error.confirmpassword}</p>}<br/>
                <input  type="submit" name="submit" value="submit" /><br/>
              
            </form>
            <button>go</button>

        </>
    );
}

export default Bank



