import { useState } from "react";
import axios from "axios";
function Courseform(){
    const [formData, setFormData] = useState({
       name : '',
       email:"",
       phoneno:'',
       education:'',
       gender:'',
       address:'',
       date:'',
       occupation:'',
       


    })

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
        axios.post('http://localhost:2222/addcourseforms',{formData}).then((res)=>
        alert(res.data.msg))

          
        
    }

    return(



        <>
           
            {/* <h1>Form</h1> */}
            
            {/* <form onSubmit={handleSubmit}>
                {/* <label>coursename</label>
                {/* <input type="text" name="coursename"    onChange={(e) => setFormData({...formData, coursename: e.target.value})} /> <br /> */}
                  {/* <select  name="coursename"  value="coursename" onChange={(e) => setFormData({...formData, coursename: e.target.value})} required>
                    <option value="FSD" >FSD</option>
                    <option value="Flutter">Flutter</option>
                    <option  value="Deveops">Deveops</option>
                    <option value="AWS">AWS</option>
                    <option  value="AIML">AIML</option>
                </select><br/> */} 



                {/* <input type="submit" value="submit"/> */}
                
               
            {/* </form>
         */}
<form onSubmit={handleSubmit}>
<label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>Name</label>
                <input type="text" name="name"    onChange={(e) => setFormData({...formData, name: e.target.value})} /> <br />
               
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>PhoneNo</label>
                <input type="text" name="phoneno"  style={{marginRight:'28px'}} onChange={(e) => setFormData({...formData, phoneno: e.target.value})} /> <br />
                
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>Email</label>
                <input type="email" name="email"   onChange={(e) => setFormData({...formData, email: e.target.value})} ></input><br/>
               
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'80px'}}>Gender</label>
                <input type="radio" name="gender" value="male"  style={{marginLeft:'40px'}}onChange={(e) => setFormData({...formData, gender: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>Male</label>
                <input type="radio" name="gender" value="female"  onChange={(e) => setFormData({...formData, gender: e.target.value})}></input>
                <label style={{marginRight:'10px',fontWeight:'bold'}}>Female</label><br/>
                
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'60px'}}>Loan Amount</label>
                <input type="radio" name="loan" value="1,00,00" onChange={(e) => setFormData({...formData, loan: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>1,00,000</label>
                <input type="radio" name="loan" value="3,00,00" onChange={(e) => setFormData({...formData, loan: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>3,00,000</label>
                <input type="radio" name="loan" value="10,00,00" onChange={(e) => setFormData({...formData, loan: e.target.value})}></input>
                <label style={{fontWeight:'bold'}}>10,00,000</label>
                
                <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'110px'}}>Qualification</label>
                <select style={{marginRight:'40px'}}onChange={(e) => setFormData({...formData, education: e.target.value})}>
                    <option name="education" value="10th class">10th Class</option>
                    <option name="education" value="Intermediate">Intermedaiate</option>
                    <option name="education" value="Degree">Degree</option>
                    <option name="education" value="B.Tech">B.Tech</option>
                </select><br/>
               
               <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'120px'}}>Date of Birth</label>
               <input type="date" name="date"  style={{marginRight:'30px'}}onChange={(e) => setFormData({...formData, date: e.target.value})}></input>
              
               <label style={{color:'darkgreen',fontWeight:'bold',marginRight:'40px'}}>Occupation</label>
               <input type="text" name="occupation" style={{marginRight:'60px'}}onChange={(e) => setFormData({...formData, occupation: e.target.value})}></input><br/>
             
               <label style={{color:'darkgreen',fontWeight:'bold',marginLeft:'120px'}}>Address</label>
                <textarea type="text" name="address"  style={{marginLeft:'20px'}}rows={3} cols={40} onChange={(e) => setFormData({...formData, address: e.target.value})}/>
              
               <br/>
              <input type="submit"/>submit

</form>
        </>
    );
}

export default Courseform;



