// import axios from "axios";
// //import React ,{useState,useEffect} from "react";
// import React ,{useState,useEffect} from "react";
// import {Link} from "react-router-dom"
// const Datacourselist=()=>{
//     let [courses,setStudents]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:2222/getcourseform').then((response)=>{
//             console.log(response.data.coursedata)
//             setStudents(response.data.coursedata);
//         });
//      },[]);
//      const Deletestu=(id)=>{
//         console.log(id)
//         axios.delete('http://localhost:2222/deleteuser/'+id)
//         // sending data to backend
//         .then(res=>{console.log(res)

//             alert("data deleted sucessfully")
//            // windows.location.href='/usersdata';
//            window.location.reload()
//            // refresh the page
//         })
//         .catch(err=>{console.log(err)})
//       }
// return(
//     <>
//      <br/>
//     <h2>user list</h2>
//     <table align="center" border={1} cellspacing={10} cellpadding={10} >
//         <tr>
//             <th>S.no.</th>
//             <th>CourseName</th>
            
//            </tr>
//             {courses && courses.map((ele,index,arr)=>{
//                 return(
//                     <tr key={index}>
                        
//                         <td>{index+1}</td>
//                         <td>{ele.coursename}</td>
//                         <td><button onClick={()=>Deletestu(ele._id)}>Delete</button></td>
//                         <td><Link to={`/editform2/${ele._id}`}><button >edit</button></Link></td>
                        
                        
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
// export default Datacourselist;















// import axios from "axios";
// //import React ,{useState,useEffect} from "react";
// import React ,{useState,useEffect} from "react";
// import {Link} from "react-router-dom"
// const Datacourselist=()=>{
//     let [courses,setStudents]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:2222/getcourseforms').then((response)=>{
//             console.log(response.data.coursedata)
//             setStudents(response.data.coursedata);
//         });
//      },[]);
//     //  const Deletestu=(id)=>{
//     //     console.log(id)
//     //     axios.delete('http://localhost:2222/deleteuser/'+id)
//     //     // sending data to backend
//     //     .then(res=>{console.log(res)

//     //         alert("data deleted sucessfully")
//     //        // windows.location.href='/usersdata';
//     //        window.location.reload()
//     //        // refresh the page
//     //     })
//     //     .catch(err=>{console.log(err)})
//     //   }
// return(
//     <>
//      <br/>
//     <h2>user list</h2>
//     <table align="center" border={1} cellspacing={10} cellpadding={10} >
//         <tr>
//             <th>S.no.</th>
//             <th>Name</th>
//             <th>phoneno</th>
//             <th>email</th>
//             <th>education</th>
//             <th>gender</th>
//             <th>address</th>
//             <th>date</th>
//             <th>occupation</th>
//             <th>copyright1</th>
            
//            </tr>
//             {courses && courses.map((ele,index,arr)=>{
//                 return(
//                     <tr key={index}>
                        
//                         <td>{index+1}</td>
//                         <td>{ele.name }</td>
//                         <td>{ele.phoneno }</td>
//                         <td>{ele.email}</td>
//                         <td>{ele.education }</td>
//                         <td>{ele.gender }</td>
//                         <td>{ele.address }</td>
//                         <td>{ele.date}</td>
//                         <td>{ele.occupation}</td>
//                         <td>{ele.copyright1}</td>
                        
                        
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
// export default Datacourselist;