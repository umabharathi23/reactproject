import { useState } from "react"
function Hooks(){
   const[cnt,setcnt]=useState(0)
   const incr=()=>{
    setcnt(cnt+1)
   }
    return(
        <div>
            <p>{cnt}</p>  
            <button onClick={incr}>Incrby 1</button>  
            <button onClick={()=>setcnt(cnt-1)}>decre by 1</button>  
        </div>
    )
}
export default Hooks;