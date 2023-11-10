import axios from "axios";
import React ,{useState,useEffect} from "react";
const Datauserlist=()=>{
    let [users,setStudents]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:2222/getusers').then((response)=>{
            console.log(response.data.userdata)
            setStudents(response.data.userdata);
        });
     },[]);
return(
    <>
     <br/>
    <h2>user list</h2>
    
            {users && users.map((ele,index,arr)=>{
                return(
                        <ul style={{listStylePosition:"Inside"}}>
                        <li>{index+1}</li>
                        <li>{ele.username}</li>
                        <li>{ele.password}</li>
                        
                        </ul>
                   
                )
            })}
            {/* {students && students.map((ele,index,arr)=>{
                return(
                    <tr key={index}>
                        <ul>
                        <li>{index+1}</li>
                        <li>{ele.name}</li>
                        <li>{ele.rollno}</li>
                        <li>{ele.college}</li>
                        <li>{ele.branch}</li>
                        </ul>
                    </tr>
                )
            }
            )} */}
            
            </> 
)
}
export default Datauserlist;