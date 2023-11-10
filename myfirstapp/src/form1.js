import { useState } from "react";
import axios from "axios";

function Form1(){
    const [formData, setFormData] = useState({
        name : '', 
        rollno : '',
    //     email : '',
    //    gender:'',
        // number:'',
        college:'',
        branch:''
    })

    function handleSubmit(event){
        event.preventDefault()
    
        console.log(formData);
        axios.post('http://localhost:2222/addstudent',{formData}).then((res)=>
       // console.log(res.data))
        alert(res.data.msg))

          
        
    }

    return(



        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"    onChange={(e) => setFormData({...formData, name: e.target.value})} /> <br />
                <label>Roll No</label>
                <input type="text" name="rollno"   onChange={(e) => setFormData({...formData, rollno: e.target.value})} /> <br />
                {/* <label>Email</label>
                <input type="email" name="email"  onChange={(e) => setFormData({...formData, email: e.target.value})} /> <br /> */}
                {/* <input  type="submit" name="submit" value="submit" /> */}
                {/* <input type="radio" name="gender" value="female" onChange={(e) => setFormData({...formData, gender: e.target.value})}/>Female <br/>
                <input type="radio" name="gender" value="male" onChange={(e) => setFormData({...formData, gender: e.target.value})}/>male<br/> */}
                {/* <input type="number" name="number" onChange={(e) => setFormData({...formData, number: e.target.value})}/>Number<br/>
                <input type="password" name="password" onChange={(e) => setFormData({...formData, password: e.target.value})}/>Password<br/> */}
                {/* <select onChange={(e) => setFormData({...formData, college: e.target.value})}>
                    <option >acet</option>
                    <option >aec</option>
                    <option >acoe</option>
                </select><br/> */}
                <input type="text" name="college" onChange={(e) => setFormData({...formData, college: e.target.value})}/><br/>
                
                <input type="text" name="branch" onChange={(e) => setFormData({...formData, branch: e.target.value})}/><br/>
                <input  type="submit" name="submit" value="submit" /><br/>
            </form>

        </>
    );
}

export default Form1