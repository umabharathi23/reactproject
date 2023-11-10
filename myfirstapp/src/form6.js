// import { useState } from "react"
// import axios from "axios";
//     const Form6=()=>{
//         const[formData,setFormData]=useState({
//         name:'',
//         password:'',
//         email:'',
//         myfile:'',
//     })
//     const handleSubmit=(e)=>{
//         const Inputfields=new formData()// to add our fields
//         Inputfields.append("my file",formData.myfile)
//         Inputfields.append("name",formData.name)
//         Inputfields.append("password",formData.password)
//         Inputfields.append("email",formData.email)
//         //appending form data to file
//         e.preventDefault();
//         console.log(formData)
//         axios.post('http://localhost:2222/adddata',Inputfields).then((req)=>
//         //  console.log(req.data)
//         // setFormdata=' '
//         alert(req.data.msg)
//         ) 
//       }
//         return(
//         <div>
//             <h1>Driveready Registeration</h1>
//             <form onSubmit={handleSubmit}>
//             <label>name</label>
//         <input type="text" name="name" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}/><br/><br/>
//         <label>Email</label>
//         <input type="text" name="email"  value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/><br/><br/>
//         <label>File upload</label>
//         <input type="file" name="myfile" onChange={(e)=>setFormData({...formData,myfile:e.target.files[0]})}/><br/>
//         <label>Password</label>
//         <input type="text" name="password" onChange={(e)=>setFormData({...formData,password:e.target.value})}/><br/><br/>
//             <input  type="submit" value="submit"/>
//             </form>
//             </div>
//             )
//     }
// export default Form6

import { useState } from "react";
import axios from "axios";
function Form6(){
    const [formdata, setFormData] = useState({
        name : '', 
        email: '',
        password: '',
        myfile:'',
       
    
        
    })

    const handleSubmit=(event)=>{
        const Inputfields=new FormData()
        Inputfields.append("myfile",formdata.myfile)
        Inputfields.append("name",formdata.name)
        Inputfields.append("password",formdata.password)
        Inputfields.append("email",formdata.email)
        
       
        event.preventDefault();
        //console.log(formdata);
        
        axios.post('http://localhost:2222/adddata',Inputfields).then((res)=>{
           if(res.status===200){
            alert(res.data.msg)
           }
        })
        setFormData({
            name:"",
            email:"",
            password:"",
            myfile:null
        });
    }

    return(

        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
            <label>name</label>
        <input type="text" name="name" value={formdata.name} onChange={(e)=>setFormData({...formdata,name:e.target.value})}/><br/><br/>
        <label>Email</label>
         <input type="text" name="email"   onChange={(e)=>setFormData({...formdata,email:e.target.value})}/><br/><br/>
        <label>File upload</label>
        <input type="file" name="myfile" onChange={(e)=>setFormData({...formdata,myfile:e.target.files[0]})}/><br/>
        <label>Password</label>
        <input type="passowrd" name="password" onChange={(e)=>setFormData({...formdata,password:e.target.value})}/><br/><br/>  
        <label></label>
          
                 <input  type="submit" value="submit"/>
            </form>

        </>
    );
}

export default Form6