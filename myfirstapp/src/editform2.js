import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Editform2(){
    const [formData, setFormData] = useState({
    //     name : '', 
    //     rollno : '',
    // //     email : '',s
    // //    gender:'',
    //     // number:'',
    //     college:'',
    //     branch:''
    course:''
    })
    const {id} =useParams()
    // id ni url ni get 
    //chesukuntam andulo edit chesukovadaniki 
    // front end lo icha id ni techukuntunna adi url lo pass ayyi edit avutundi
    useEffect(()=>{
        axios.get('http://localhost:2222/getcourseformbyid/'+id).then((response)=>{
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
        axios.put('http://localhost:2222/updatecourseform/'+id,formData).then((result)=>{
        alert(result.data.msg)   
        })
    }


    return(



        <>
             <form onSubmit={handleSubmit}>
                <h1>hi</h1>
                <label>coursename</label>
                {/* <input type="text" name="coursename"    onChange={(e) => setFormData({...formData, coursename: e.target.value})} /> <br /> */}
                  <select  name="coursename"  value={formData.course} onChange={(e) => setFormData({...formData, coursename: e.target.value})} required>
                    <option value="FSD" >FSD</option>
                    <option value="Flutter">Flutter</option>
                    <option  value="Deveops">Deveops</option>
                    <option value="AWS">AWS</option>
                    <option  value="AIML">AIML</option>
                </select><br/>

                <input type="submit" value="submit"/>
                
               
            </form>

        </>
    );
}

export default Editform2;