import React,{useEffect,useState} from "react"
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
function Login(){
    const history=useNavigate();
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [errors,seterrors]=useState({
        name:"",
        phonenumber:" ",  
        password:" ",
        email:" ",
        confirmpassword:" ",
    })
    


    async function submit(e)
    
    {
        e.preventDefault();
        try{
            await axios.post("http://localhost:2222/",{email,password
        }).then(res=>{
        



            if(res.data=="exists" )
            //already email present in daatabase
            {
               history("/bank2")
                //console.log(res.data)
            }

           
            if(res.data==email)
            //already email present in daatabase
            {
                if(res.data=="umabharathiyerubandi@gmail.com"){
                    history("/getcoursedata1")
                }
                else{
                    history('/bank2')
                }
            }
           

            
            
            else if (res.data=="notexist")
            //already email present in daatabase
            {
               alert("user no sign up")
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    }
        catch(e){
            console.log(e)

        }
    
    }
    
    return(
        
      <center>
        <br/>
        <br/>
        <br/>
       <div style={{height:'300px',width:'320px',border:'5px solid darkgreen',borderRadius:'50px'}}>
             
      <center> <h1 style={{color:'purple',fontWeight:'',marginLeft:'40px'}}>Login</h1></center>
       <br/>
       <form action="POST">
        <label style={{color:'green',fontWeight:'bold',marginRight:'50px'}}>Email</label>
        <input type="email" style={{border:'2px solid green'}} onChange={(e)=>{setemail(e.target.value)}}></input><br/><br/>
        {/* {errors.email && <p style={{color:"red"}}>{errors.email}</p>}<br/>  <br/> */}
        <label style={{color:'green',fontWeight:'bold',marginRight:'25px'}}>Password</label>
        <input type="password"  style={{border:'2px solid green'}} onChange={(e)=>{setpassword(e.target.value)}}></input><br/><br/>
        <input type="submit"  style={{color:'white',background:'green',borderRadius:'50px'}}onClick={submit}></input>
        </form>
        <br/>
       
        <Link to= "/form5">signup</Link>
        </div>
        </center>
    )
}
export default Login