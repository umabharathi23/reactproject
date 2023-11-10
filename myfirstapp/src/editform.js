import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Editform(){
    const [formData, setFormData] = useState({
        name : '', 
        rollno : '',
    //     email : '',s
    //    gender:'',
        // number:'',
        college:'',
        branch:''
    })
    const {id} =useParams()
    // id ni url ni get 
    //chesukuntam andulo edit chesukovadaniki 
    // front end lo icha id ni techukuntunna adi url lo pass ayyi edit avutundi
    useEffect(()=>{
        axios.get('http://localhost:2222/getstudentbyid/'+id).then((response)=>{
           // getstudentbyid ki backend lo code rayali data feetch cheyadaniki
            // url lo id add avvadaniki adi params loki vastadi
            // database nunchi data ni get cheyadiniki 
            //aa data ni erase cheyadanilki
            // edit click aa data first display cheyadaniki
            console.log(response.data.studentdata)
            setFormData(response.data.studentdata);
        })
        .catch((err)=>console.log(err))
    },[]);
    // function handleSubmit(event){
    //     event.preventDefault()
    
    //     console.log(formData);
    //     axios.put('http://localhost:2222/updatestudent/'+id,{formData}).then((res)=>
    //    // console.log(res.data))
    //    //+id match aina data update avvali 
    //    //id tho ee value call chestaamoo //
    //    // backendo lo code 
    //     alert(res.data.msg))

          
        
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        axios.put('http://localhost:2222/updatestudent/'+id,formData).then((result)=>{
        alert(result.data.msg) 
        window.location.reload()  
        })
    }


    return(



        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"   value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} /> <br />
                {/* //value attribute=== dispaly lo chupinchadaniki */}
                <label>Roll No</label>
                <input type="text" name="rollno"  value={formData.rollno} onChange={(e) => setFormData({...formData, rollno: e.target.value})} /> <br />
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
                <input type="text" name="college" value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})}/><br/>
                <input type="text" name="branch" value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})}/><br/>
                <input  type="submit" name="submit" value="submit" /><br/>
            </form>

        </>
    );
}

export default Editform;