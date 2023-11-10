import React,{useState} from 'react'
const Owncount=()=>{
    const[count,setcount]=useState(0);
    return(
        <div><button onClick={()=>setcount(count+1)}>change</button></div>
    )
}
export default Owncount