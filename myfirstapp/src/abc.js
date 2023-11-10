import c19 from './c20.jpg'
import { useState } from "react";
import axios from "axios";

function Abc(){
    
    const [formData, setFormData] = useState({
        name : '', 
        phoneno : '',
        email:'',
        gender:'',
        loan:'',
        education:' ',
        address:'',
        date:'',
        occupation:'',
        copyright1:''
    
        
    })
    const[errors,seterrors]=useState({
        name:'',
        phoneno:'',
        email:'',
        gender:'',
        loan:'',
        education:'',
        address:'',
        date:'',
        occupation:'',
        copyright1:''
        })
        const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const [value,setvalue]=useState('')
        const c=['NY2Xz','In92ipX','n1ee8rg','aPX6j','il3l7o','e1tR6']
        const his=()=>{
            const r=Math.floor(Math.random()*c.length); 
            setvalue(c[r])
            
            console.log(value)
            
        }
       
    function handleSubmit(event){
        event.preventDefault()  
        if(formData.name.length == 0){
                seterrors((errors)=>({...errors,name:" enter your name"}))
        }
        else{
            seterrors((errors)=>({...errors,name:" "}))
        }
       
        if(formData.phoneno.length == 0){
            seterrors((errors)=>({...errors,phoneno:"enter Phone number"}))
            }
        else if(formData.phoneno.length<10 || formData.phoneno.length>10 ){
            seterrors((errors)=>({...errors,phoneno:"enter a valid 10 digited phone Number"}))
                    
            }
        else{
            seterrors((errors)=>({...errors,phonenono:" "}))

            }
        if (formData.email.length==0){
                seterrors((errors)=>({...errors,email:"enter email"}))
            }
        else if(!emailpattern.test(formData.email))
            {
            seterrors((errors)=>({...errors,email:"enter valid email"}))
            }
        else{
            seterrors((errors)=>({...errors,email:" "}))
            }
        if(!formData.gender){
            seterrors((errors)=>({...errors,gender:"select ypur gender"}))
        }
        if(!formData.loan){
            seterrors((errors)=>({...errors,loan:"select your loan amount"}))
        }
        if(!formData.education){
            seterrors((errors)=>({...errors,education:"select your qualification"}))
        }
        if(formData.address.length==0){
            seterrors((errors)=>({...errors,address:"enter your Address"}))
           
        }
        if(formData.date.length==0){
            seterrors((errors)=>({...errors,date:"enter your date of Birth"}))
        }
        if(formData.occupation.length==0){
            seterrors((errors)=>({...errors,occupation:"enter your Occupation"}))
        }
        if(!formData.copyright1){
            seterrors((errors)=>({...errors,copyright1:"You have to tick the Checkbox"}))
        }


            

          
        
    }
    function hi(){
        if(formData.name.length!=0 && formData.phoneno!=" " && formData.phoneno.length==10 && emailpattern.test(formData.email) && formData.gender && formData.loan && formData.address && formData.date && formData.occupation && formData.copyright1){
            console.log(formData);
        axios.post('http://localhost:2222/addcourseforms',{formData}).then((res)=>
         console.log(res.data))
         alert("you have Successfully Applied for Home Loan")
         window.location.assign(`/th/`)

        }
        else{
            alert("incorrect")
        }
        
    //     console.log(formData);
    //     axios.post('http://localhost:2222/addstudent',{formData}).then((res)=>
    //    // console.log(res.data))
    //     alert(res.data.msg))
    //     if(formData.phoneno!= " "){
    //         seterrors((errors)=>({...errors,phoneno:"enter Phone number"}))
    //         console.log(formData);
    //     axios.post('http://localhost:2222/addstudent',{formData}).then((res)=>
    //    // console.log(res.data))
    //     alert(res.data.msg))
    //     alert("your data was invalid")
        
    //         }





    
        // const [value,setvalue]=useState('')
        // const c=['NY2Xz','In92ipX','n1ee8rg','aPX6j','il3l7o','e1tR6']
        // const hi=()=>{
        //     const r=Math.floor(Math.random()*c.length); 
        //     setvalue(c[r])
        //     console.log(value)
        // }
       
           
            // <p>{value}</p>
            // <button  onClick={hi}>Check</button>
            // </>

        
    
           
        


    }
    

    return(



        <div  style={{backgroundImage:`url(${c19})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'682px'}}>
            <h1 style={{color:'purple'}}>Home  Application Form</h1>
             {/* <p>{value}</p>
            <button onClick={his}>Check</button> */}
            <form onSubmit={handleSubmit} >
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>Name</label>
                <input type="text" name="name"    onChange={(e) => setFormData({...formData, name: e.target.value})} /> <br />
                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>PhoneNo</label>
                <input type="text" name="phoneno"  style={{marginRight:'28px'}} onChange={(e) => setFormData({...formData, phoneno: e.target.value})} /> <br />
                {errors.phoneno && <p style={{color:"red"}}>{errors.phoneno}</p>}
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>Email</label>
                <input type="email" name="email"   onChange={(e) => setFormData({...formData, email: e.target.value})} ></input><br/>
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'80px'}}>Gender</label>
                <input type="radio" name="gender" value="male"  style={{marginLeft:'40px'}}onChange={(e) => setFormData({...formData, gender: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>Male</label>
                <input type="radio" name="gender" value="female"  onChange={(e) => setFormData({...formData, gender: e.target.value})}></input>
                <label style={{marginRight:'10px',fontWeight:'bold'}}>Female</label><br/>
                {errors.gender && <p style={{color:"red"}}>{errors.gender}</p>}
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'60px'}}>Loan Amount</label>
                <input type="radio" name="loan" value="1,00,00" onChange={(e) => setFormData({...formData, loan: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>1,00,000</label>
                <input type="radio" name="loan" value="3,00,00" onChange={(e) => setFormData({...formData, loan: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>3,00,000</label>
                <input type="radio" name="loan" value="10,00,00" onChange={(e) => setFormData({...formData, loan: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>10,00,000</label>
                {errors.loan && <p style={{color:"red"}}>{errors.loan}</p>}<br/>
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'110px'}}>Qualification</label>
                <select style={{marginRight:'40px'}}onChange={(e) => setFormData({...formData, education: e.target.value})}>
                    <option name="education" value="10th class">10th Class</option>
                    <option name="education" value="Intermediate">Intermedaiate</option>
                    <option name="education" value="Degree">Degree</option>
                    <option name="education" value="B.Tech">B.Tech</option>
                </select><br/>
                {/* <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>Address</label>
                <textarea type="text" name="address"  rows={3} cols={40} onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                {errors.address && <p style={{color:"red"}}>{errors.address}</p>}
               <br/> */}
               <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'120px'}}>Date of Birth</label>
               <input type="date" name="date"  style={{marginRight:'30px'}}onChange={(e) => setFormData({...formData, date: e.target.value})}></input>
               {errors.date && <p style={{color:"red"}}>{errors.date}</p>}<br/>
               <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>Occupation</label>
               <input type="text" name="occupation" style={{marginRight:'60px'}}onChange={(e) => setFormData({...formData, occupation: e.target.value})}></input><br/>
               {errors.occupation && <p style={{color:"red"}}>{errors.occupation}</p>}<br/>
               <label style={{color:'darkgreen',fontWeight:'bold',marginLeft:'120px'}}>Address</label>
                <textarea type="text" name="address"  style={{marginLeft:'20px'}}rows={3} cols={40} onChange={(e) => setFormData({...formData, address: e.target.value})}/>
                {errors.address && <p style={{color:"red"}}>{errors.address}</p>}
               <br/>
               {/* <button  style={{color:'darkgreen',background:'yellow',fonrweight:'bold',borderRadius:'50px',marginRight:'30px'}}onClick={hi}>Verify</button>
                <input  type="submit" name="submit" value="submit"  style={{color:'darkgreen',background:'yellow',fonrweight:'bold',borderRadius:'50px'}} /><br/>
               */}
                
            <button onClick={his}>Get My Captcha</button> <span>{value}</span><br/>
               <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'70px'}}>Enter the Captcha here</label>
               <input type="text" style={{marginRight:'120px'}}></input>             
            <br/>
               <input type="checkbox" name="copyright1" onChange={(e) => setFormData({...formData,copyright1: e.target.value})}/>I have agreed to above terms and condtions of your bank
               <br/> I promise you that above mentioned details are completely true
               {errors.copyright1 && <p style={{color:"red"}}>{errors.copyright1}</p>}<br/>
               <input  type="submit" name="submit" value="submit"  style={{color:'darkgreen',background:'yellow',fonrweight:'bold',borderRadius:'50px'}} />
               <button  style={{color:'darkgreen',background:'yellow',fonrweight:'bold',borderRadius:'50px',marginLeft:'30px'}}onClick={hi}>Verify Submission</button>
                {/* <input  type="submit" name="submit" value="submit"  style={{color:'darkgreen',background:'yellow',fonrweight:'bold',borderRadius:'50px'}} /><br/> */}
              
            </form>

        </div>
    );
}

export default Abc






// import {useState} from "react"
// import {Link} from "react-router-dom"
// function Form5(){
// const [name,setname]=useState(" ")
// const [phonenumber,setphoenumber]=useState(" ")
// const [email,setemail]=useState(" ")
// const [password,setpassword]=useState(" ")
// const [confirmpassword,setconfirmpassword]=useState(" ")
// const [errors,seterrors]=useState({
//   name:"",
//   phonenumber:" ",  
//   password:" ",
//   email:" ",
//   confirmpassword:" ",

// })

// const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// function Check(e){
//     e.preventDefault()
//     if(name!=" " && email!=" " && phonenumber!=" " && password!=" " && confirmpassword!=" " && phonenumber.length==10 && emailpattern.test(email) && password.length>=8 && confirmpassword.length>=8 &&  confirmpassword==password)
//    {
//     alert(" You have Successfully Registered")
//     window.location.assign(`/bank2/`)
        
//     }
//     else{
//         alert("Your Data is not Valid.Check Again")
//     }
 
    
// }

// function handlesubmit(e){
//     e.preventDefault()
//     if(name === " "){
//         seterrors((errors)=>({...errors,name:"enter your name "}))
//     }
//     else{
//         seterrors((errors)=>({...errors,name:" "}))
//     }
//     if(phonenumber === " "){
//         seterrors((errors)=>({...errors,phonenumber:"enter Phone number"}))
//     }
//     else if(phonenumber.length<10 || phonenumber.length>10 ){
//         seterrors((errors)=>({...errors,phonenumber:"enter a valid 10 digited phone Number"}))

//     }
//     else{
//         seterrors((errors)=>({...errors,phonenumber:" "}))
//     }
//     if (email===" "){
//         seterrors((errors)=>({...errors,email:"enter email"}))
//     }
//     else if(!emailpattern.test(email))
//     {
//         seterrors((errors)=>({...errors,email:"enter valid email"}))
//     }
//     else{
//         seterrors((errors)=>({...errors,email:" "}))
//     }
//     if (password === " "){
//         seterrors((errors)=>({...errors,password:"enter a valid password"}))
//     }
//     else if(password.length<8){
//         seterrors((errors)=>({...errors,password:"enter   password  "}))
//     }
//     else{
//         seterrors((errors)=>({...errors,password:" "}))
//     }
//     if (confirmpassword === " "){
//         seterrors((errors)=>({...errors,confirmpassword:"enter password"}))
//     }
//     else if(confirmpassword.length<8){
//         seterrors((errors)=>({...errors,confirmpassword:"enter a valid password with 8 characters "}))
//     }
//     else if(password!=confirmpassword){
//         seterrors((errors)=>({...errors,confirmpassword:"password and confirmpassword are not matched  "}))
//     }
//     else{
//         seterrors((errors)=>({...errors,confirmpassword:" "}))
//     }
//     console.log(name)

// }

//     return(
       

//         <form onSubmit={handlesubmit} style={{marginTop:"50px"}}> 
//             <h1 style={{color:"purple"}}>Registration Form</h1><br/>
//             <label style={{fontWeight:"bold",marginRight:'80px'}}>Name</label>
//             <input type=" text" value={name} onChange={(e)=>{setname(e.target.value)} }></input><br/>
//             {errors.name && <p style={{color:"red"}}>{errors.name}</p>}<br/>
//             <label style={{fontWeight:"bold",marginRight:'10px'}}>Phone Number</label>
//             <input type=" text" value={phonenumber} onChange={(e)=>{setphoenumber(e.target.value)} }></input><br/>
//             {errors.phonenumber && <p style={{color:"red"}}>{errors.phonenumber}</p>}
//             <label style={{fontWeight:"bold",marginRight:'80px'}}>Email</label>
//             <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input><br/>
//             {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
//             <label style={{fontWeight:"bold",marginRight:'50px'}}>Password</label>
//             <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input><br/>
//             {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
//             <label  style={{fontWeight:"bold",marginRight:'5px'}}>ConfirmPassword</label>
//             <input type="password" value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}}></input><br/>
//             {errors.confirmpassword && <p style={{color:"red"}}>{errors.confirmpassword}</p>}
//             <input type="submit" style={{color:'white',background:'green',borderRadius:"30px",height:"40px",width:"100px",marginRight:"30px"}}></input>
            
//             <input type="button"  value="Verify" style={{color:'white',background:'green',borderRadius:"30px",height:"40px",width:"100px"}} onClick={Check}/>
//             {/* //<Link to={`/editform`}><button >edit</button></Link> */}
//         </form>
        
       
//     )
// }
// export default Form5