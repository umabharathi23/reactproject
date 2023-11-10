

import { Link } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
// // import '../products.css';

// function Category(){
//     const [data,setData] = useState([]) // const data=[]
//     const [cnt,setCnt] = useState(0) // const cnt=0
//     const api = 'https://fakestoreapi.com/products';
//     useEffect(()=>{
//         getProductlist()
//     },[cnt])
//     //way1 .without [] means multiple times
//     //way2. [] means one time
//     //way3. [cnt] means inside the function call based on "cnt" value 

//        function hi(){
//         console.log()
//        }

        
//     const getProductlist = () =>{
//         axios.get(api).then((response) => {
//             //  console.log(response)
//              setData(response.data);            
//         });
        
//     }
//     return (
//         <>
//             <p>{cnt}</p>
//             <button onClick={()=>setCnt(cnt+1)}>count</button>
//             <div className="products-list">
//             {
//                 data.map((ele,i)=>{
//                     return(
//                         <div className="card">
//                              {/* <img src={ele.image} />       */}
            
//                             {/* <p>{ele.title}</p> */}
//                             <Link to = {ele.image} target="_self"> {ele.category} </Link>
                            
//                             <p>{ele.title}</p>
//                             {/* <Link to ="ele.category">/    </Link> */}
//                             {/* <a href ={ele.category} target="_blank" ><img src={ele.image} alt="example" /></a> */}
//                             {/* <a href={ele.img}></a> */}

                            
//                         </div>                        
//                     )
//                 })
//             }
//             </div>
//         </>
//     )
// }
// export default Category






// import React, {useState, useEffect } from 'react';
// import axios from 'axios';

// function Category() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch categories from the FakeStoreAPI
//     axios.get('https://fakestoreapi.com/products/categories')
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching categories:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category}>{category}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Category;

