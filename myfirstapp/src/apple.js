// import {useState} from "react";
// function A2(){
//     const [name,setName]=useState('');
//     const [rno,setRno]=useState('');
   
//     function  handleSubmit(event){
//         event.preventDefault()
        
//         console.log(name);
//         console.log(rno);
//     }
//     return(
//         <>
        
//         <form onSubmit={handleSubmit}>
//             <label>Name</label>
//             <input type="text"  onChange={(e)=>setName(e.target.value)}/><br/>
//             <label>rollno</label>


//             <input type="text"  onChange={(e)=>setRno(e.target.value)}/>
//             <br/>



            
//             <input type="submit" value="submit"/>
            
//             </form>
//             <table align="center" border={1} cellspacing={10} cellpadding={10} >
//         <tr>
//             <th>S.no.</th>
//             <th>Nmae</th>
//             <th>Rollno</th>
//             <th>college</th>
//             <th>branch</th></tr>
//             {students && students.map((ele,index,arr)=>{
//                 return(
//                     <tr key={index}>
                       
//                         <td>{index+1}</td>
//                         <td>{ele.name}</td>
//                         <td>{ele.rollno}</td>
//                         <td>{ele.college}</td>
//                         <td>{ele.branch}</td>
//                         <td><button onClick={()=>Deletestu(ele._id)}>delete</button></td>
//                         {/* ele.name,ele.id */}
                       
//                         <td><Link to={`/editform/${ele._id}`}><button >edit</button></Link></td>
                        
//                     </tr>
//                 )
//             }
//             )}
//             </table></>
//     )
// }
// export default A2


// import axios from "axios";
// import React ,{useState,useEffect} from "react";
// import {Link} from "react-router-dom"
// const Datalist=()=>{
//     let [students,setStudents]=useState([])
// return(
//     <>
//      <br/>
//     <h2>Students list</h2>
//     <table align="center" border={1} cellspacing={10} cellpadding={10} >
//         <tr>
//             <th>S.no.</th>
//             <th>Nmae</th>
//             <th>Rollno</th>
//             <th>college</th>
//             <th>branch</th></tr>
//             {students && students.map((ele,index,arr)=>{
//                 return(
//                     <tr key={index}>
                       
//                         <td>{index+1}</td>
//                         <td>{ele.name}</td>
//                         <td>{ele.rollno}</td>
//                         <td>{ele.college}</td>
//                         <td>{ele.branch}</td>
                       
//                         <td><Link to={`/editform/${ele._id}`}><button >edit</button></Link></td>
                        
//                     </tr>
//                 )
//             }
//             )}
//             </table>
//             {/* {students && students.map((ele,index,arr)=>{
//                 return(
//                     <tr key={index}>
//                         <ul>
//                         <li>{index+1}</li>
//                         <li>{ele.name}</li>
//                         <li>{ele.rollno}</li>
//                         <li>{ele.college}</li>
//                         <li>{ele.branch}</li>
//                         </ul>
//                     </tr>
//                 )
//             }
//             )} */}
            
//             </> 
// )
// }

// export default A2;

function Apple(){
    function hi(){
        window.location.assign(`/bank2/`)
    }
    return(
        <>
        <button onClick={hi}>hi</button></>
    )
}
export default Apple()