import axios from "axios";
import React ,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
const Datalist=()=>{
    let [students,setStudents]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:2222/getstudents').then((response)=>{
            console.log(response.data.studentdata)
            setStudents(response.data.studentdata);
        });
     },[]);
    //  const Deletestu=(id)=>{
    //     console.log(id)
    //     axios.delete('http://localhost:2222/deleteuser/'+id)
    //     .then(res=>{console.log(res)
    //     alert("data deletd successfully")
    //     window.location.reload()
    // })
    //      .catch(err=>{console.log(err)})
    //  }
    const Deletestu=(id)=>{
        console.log(id)
        axios.delete('http://localhost:2222/deleteuser/'+id)
        // sending data to backend
        .then(res=>{console.log(res)

            alert("data deleted sucessfully")
           // windows.location.href='/usersdata';
           window.location.reload()
           // refresh the page
        })
        .catch(err=>{console.log(err)})
      }
    //updating the form after click update button
    // const handleEdit = (event) => {
    //   event.preventDefault();
    //   const api = 'http://localhost:2222/api/edit-user/'+event
    //       axios.put(api,students).then((response) => {
    //           console.log(response.data)
    //           if(response.data.users){
    //             alert("Updated successfully.")
    //             window.location.href='/usersdata';
    //           }          
    //       });
    //:id anadi url pass cheyadanaki
    //window .locatiom .reload ===page should bereloaded
return(
    <>
     <br/>
    <h2>Students list</h2>
    <table align="center" border={1} cellspacing={10} cellpadding={10} >
        <tr>
            <th>S.no.</th>
            <th>Nmae</th>
            <th>Rollno</th>
            <th>college</th>
            <th>branch</th></tr>
            {students && students.map((ele,index,arr)=>{
                return(
                    <tr key={index}>
                       
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td>{ele.college}</td>
                        <td>{ele.branch}</td>
                        <td><button onClick={()=>Deletestu(ele._id)}>delete</button></td>
                        {/* ele.name,ele.id */}
                       
                        <td><Link to={`/editform/${ele._id}`}><button >edit</button></Link></td>
                        
                    </tr>
                )
            }
            )}
            </table>
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

export default Datalist;