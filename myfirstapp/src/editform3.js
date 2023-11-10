import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Editform3(){
    const [formData, setFormData] = useState({
       
    })
    const {id} =useParams()
    useEffect(()=>{
        axios.get('http://localhost:3000/geteditform3yid/'+id).then((response)=>{
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
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
       
        }
    

       return(
        <>
             <form onSubmit={handleSubmit}>
                <h1>hi</h1>
                <label>name</label>
                <input type="text" defaultValue={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} ></input><br/>
                <label>rollno</label>
                <input type="text" value={formData.rollno} onChange={(e) => setFormData({...formData, rollno: e.target.value})} ></input><br/>
                
                <input type="submit" value="submit"/>
                
               
            </form>

        </>
    );
}

export default Editform3;
   
          
