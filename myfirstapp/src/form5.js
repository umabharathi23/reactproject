import {useState} from "react"
import {Link} from "react-router-dom"
import c19 from './c20.jpg'
import axios from "axios"
import {useNavigate} from "react-router-dom"
function Form5(){
    const history=useNavigate();
const [name,setname]=useState(" ")
const [phonenumber,setphoenumber]=useState(" ")
const [email,setemail]=useState(" ")
const [password,setpassword]=useState(" ")
const [confirmpassword,setconfirmpassword]=useState(" ")
const [errors,seterrors]=useState({
  name:"",
  phonenumber:" ",  
  password:" ",
  email:" ",
  confirmpassword:" ",
//   async function submit(e)
//     {
//         e.preventDefault();
//         try{
//             await axios.post("http://localhost:2222/",{email,password
//         }).then(res=>{
//             if(res.data=="exists")
//             //already email present in daatabase
//             {
//                history("/homes",{state:{id:email}})
                 
//             }
//             else if (res.data=="notexist")
//             //already email present in daatabase
//             {
//                alert("user no sign up")
//             }
//         })
//         .catch(e=>{
//             alert("wrong details")
//             console.log(e);
//         })
//     }
//         catch(e){
//             console.log(e)

//         }
//     }

})
const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function Check(e){
    e.preventDefault()
    if(name!=" " && email!=" " && phonenumber!=" " && password!=" " && confirmpassword!=" " && phonenumber.length==10 && emailpattern.test(email) && password==confirmpassword && confirmpassword.length>=8 && password.length>=8 )
   {
    alert(" You have Successfully Registered")
    window.location.assign(`/bank2/`)
        
    }
    else{
        alert("Your Data is not Valid.Check Again")
    }

    
}

function handlesubmit(e){
    e.preventDefault()
    if(name === " "){
        seterrors((errors)=>({...errors,name:"enter your name "}))
    }
    else{
        seterrors((errors)=>({...errors,name:" "}))
    }
    if(phonenumber === " "){
        seterrors((errors)=>({...errors,phonenumber:"enter Phone number"}))
    }
    else if(phonenumber.length<10 || phonenumber.length>10 ){
        seterrors((errors)=>({...errors,phonenumber:"enter a valid 10 digited phone Number"}))

    }
    else{
        seterrors((errors)=>({...errors,phonenumber:" "}))
    }
    if (email===" "){
        seterrors((errors)=>({...errors,email:"enter email"}))
    }
    else if(!emailpattern.test(email))
    {
        seterrors((errors)=>({...errors,email:"enter valid email"}))
    }
    else{
        seterrors((errors)=>({...errors,email:" "}))
    }
    if (password.length == 0){
        seterrors((errors)=>({...errors,password:"enter  password"}))
    }
    else if(password.length<8){
      seterrors((errors)=>({...errors,password:"enter a valid  password  "}))
    }
   
     else{
        seterrors((errors)=>({...errors,password:" "}))
    }
    if (confirmpassword === " "){
        seterrors((errors)=>({...errors,confirmpassword:"enter password"}))
    }
    else if(confirmpassword.length<8){
        seterrors((errors)=>({...errors,confirmpassword:"enter a valid password with 8 characters "}))
    }
    else if(password!=confirmpassword){
        seterrors((errors)=>({...errors,confirmpassword:"password and confirmpassword are not matched  "}))
    }
    else{
        seterrors((errors)=>({...errors,confirmpassword:" "}))
    }
    console.log(name)
    console.log( phonenumber)
    console.log(password)
    console.log(confirmpassword)
    console.log(email)
    if(name!=" " && email!=" " && phonenumber!=" " && password!=" " && confirmpassword!=" " && phonenumber.length==10 && emailpattern.test(email) && password==confirmpassword && confirmpassword.length>=8 && password.length>=8 )
    {
    try{
         axios.post("http://localhost:2222/signup",{email,password
    }).then(res=>{
        if(res.data=="exists")
        //already email present in daatabase
        {
          alert("user already exit")
          //history("/homes",{state:{id:email}})
             
        }
        else if (res.data=="notexist")
        //already email present in daatabase
        {
           history("/bank2")
               
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



    
        


 





}




    return(
       

        <form onSubmit={handlesubmit} style={{backgroundImage:`url(${c19})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'682px'}}> 
            <h1 style={{color:"purple"}}>Sign In Form</h1><br/>
            <label style={{fontWeight:"bold",marginRight:'80px'}}>Name</label>
            <input type=" text" value={name} onChange={(e)=>{setname(e.target.value)} }></input><br/>
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}<br/>
            <label style={{fontWeight:"bold",marginRight:'10px'}}>Phone Number</label>
            <input type=" text" value={phonenumber} onChange={(e)=>{setphoenumber(e.target.value)} }></input><br/>
            {errors.phonenumber && <p style={{color:"red"}}>{errors.phonenumber}</p>}
            <label style={{fontWeight:"bold",marginRight:'80px'}}>Email</label>
            <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input><br/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            {/* <label style={{fontWeight:"bold",marginRight:'50px'}}>Password</label> */}
            <label style={{fontWeight:"bold",marginRight:'50px'}}>Password</label>
            <input type="password"  onChange={(e)=>{setpassword(e.target.value)}}></input>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            <label style={{fontWeight:"bold",marginRight:'10px'}}>ConfirmPassword</label>
            <input type="password" style={{marginRight:'20px'}} onChange={(e)=>{setconfirmpassword(e.target.value)}}></input>
            {errors.confirmpassword && <p style={{color:"red"}}>{errors.confirmpassword}</p>}
            
            <input type="submit" style={{color:'white',background:'green',borderRadius:"30px",height:"40px",width:"100px",marginRight:"30px"}}></input>
{/*             
            <input type="button"  value="Verify" style={{color:'white',background:'green',borderRadius:"30px",height:"40px",width:"100px"}} onClick={Check}/> */}
            {/* //<Link to={`/editform`}><button >edit</button></Link> */}
            <br/>
            <br/>
        
            <Link to ="/login" style={{marginRight:'30px'}}>Login</Link>
        </form>
        
       
    )
}
export default Form5