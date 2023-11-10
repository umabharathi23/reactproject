
// import {useState} from "react";

// function Fruitcomponent(){
//     const[arr,setArr]=useState(['apple','mango','apple','sapota'])
//     const[fruitname,setFruit]=useState('')
//     const Filterfruits=()=>{
//         let filteredarray=arr.filter((ele)=>{
//             return(ele===fruitname)
//         })
//         if(filteredarray.length==0){
//             setArr(['apple','mango','apple','sapota'])
//             //setArr(["No such fruit found"])
//         }else{
//             setArr(filteredarray)
//         }
//     }
//     return(
//        <div>
//         <br/>
//         <br/>
//         <input type="text" onClick={Filterfruits} onChange={(e)=>setFruit(e.target.value)}/>
//         {/* <button onClick={Filterfruits}>Check fruits</button> */}
//         <br/>
//         <ul style={{'display':'inline-block'}}>
//             {
//                 arr.map((ele,i)=>{
//                     return (<li key={i}>{ele}</li>)
//                 })
//             }
//         </ul>
//        </div> 

//     )
// }
// export default Fruitcomponent