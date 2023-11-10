// import {useState} from "react"
// import { useNavigate } from "react-router-dom"
// import {Link} from "react-router-dom"
 
// import axios from "axios"
// function Signup(){
//     const[email,setemail]=useState(" ")
//     const[password,setpassword]=useState(" ")
//     const history=useNavigate();
//     const submit=(e)=>{
//         e.preventDefault();
//     //    axios.post("http://localhost:2222/register",{email,password})
//     //    .then(res =>
//     //      console.log(res)
        
//     //      )
//     //    .catch(err=>console.log(err))   

//     try{
//          axios.post("http://localhost:2222/addsignup",{
//         email,password
//     }
//         ).then(res=>{
//             if(res.data.msg==400)
               
//             {
//                  history("/homes",{state:{id:email}})
//                  alert("hi")
                
//         }
//             else if(res.data.msg==200){
//                 alert("user have not sign up")
//                 //alert("ok")
                
//             }

//         })
//         .catch(e=>{
//             alert("")
//             console.log(e)
//         })
// }
//     catch(e){
//         console.log(e)
//     }
// }

//     return(
//         <>
//         <form onSubmit={submit}>
//         <input type="email" onChange={(e)=>{setemail(e.target.value)}}></input>
//         <input type="password" onChange={(e)=>{setpassword(e.target.value)}}></input>
//         <input type="submit"></input>
//         </form>
//         <br/>
//         <p>Or</p>
//         <Link to="/login" >Login</Link>
//     </>
//     )      
// }
// export default Signup







// import React,{useEffect,useState} from "react"
// import axios from "axios"
// import {useNavigate,Link} from "react-router-dom"
// function Signup(){
//     const history=useNavigate();
//     const [email,setemail]=useState('')
//     const [password,setpassword]=useState('')
//     async function submit(e){
//         e.preventDefault()
//         try{
//             await axios.post("http://localhost:2222/signup" ,
//             {email,password
//             }).then(res=>{
//                 if(res.data =="exists")
               
//                 {
//                    alert("user already exists")
                   

//                 }
//                 else if (res.data =="notexist")
                
//                 {
//                   history("/homes",{state:{id:email}})
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details")
//                 console.log(e);
//             })
//         }
//         catch(e){
//             console.log(e)

//         }
//     }
//     return(
//        <>
//        <h1>Signup</h1>
//        <form action="POST">
//         <input type="email" onChange={(e)=>{setemail(e.target.value)}}></input>
//         <input type="password" onChange={(e)=>{setpassword(e.target.value)}}></input>
//         <input type="submit" onClick={submit}></input>
//         </form>
//         <br/>
//         <p>Or</p>
//         <Link to= "/login">login</Link>
//         </>
//     )
// }
// export default Signup