// import { useEffect,useState } from "react";
// import axios from "axios"; // npm i axios
//  import './product.css';
// import { Link,useParams } from "react-router-dom";

// function Singleproduct(){
//     const [data,setData] = useState([]) // const data=[]
//     const [cnt,setCnt] = useState(0) // const cnt=0
//     const params=useParams();
//     const api = `https://fakestoreapi.com/products/${params.id}`;
//     useEffect(()=>{
//         getProductlist()
//     },[cnt])
//     //way1 .without [] means multiple times
//     //way2. [] means one time
//     //way3. [cnt] means inside the function call based on "cnt" value 
//     const getProductlist = () =>{
//         axios.get(api).then((response) => {
//             // console.log(response)
//             setData(response.data);            
//         });
//     }
//     return (
//         <>
//             <p>{cnt}</p>
//             <h1>products</h1>
//             <button onClick={()=>setCnt(cnt+1)}>count</button>
//             <div className="products-list">
//             {
//                 data.map((ele,i)=>{
//                     return(
//                         <div className="card">
//                             {/* <Link to={`/singleproduct/${ele.id}`}><img src={ele.image}></img></Link> */}
                            
//                             <p>{data.title}</p>
//                             <p>{data.price}</p>
                            
//                             <p>{data.category}</p>
                            
                            
//                         </div>                        
//                     )
//                 })
//             }
//             </div>
//         </>
//     )
// }
// export default Singleproduct
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function Singleproduct(){
    const [data,setData] = useState([]) // const data=[]
    const [cnt,setCnt] = useState(0) // const cnt=0
    const params = useParams();
    const api = `https://fakestoreapi.com/products/${params.id}`;
    
    useEffect(()=>{
        getProductlist()
    },[cnt])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }
    // console.log()
    return (
      
       
                        <div className="card">
                            <img src={data.image} />
                            <p>{data.title}</p>
                            <p>{data.price}</p>
                            <p>{data.category}</p>
                        </div>                        
   


    )
}
export default Singleproduct