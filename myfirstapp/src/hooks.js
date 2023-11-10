import {useState} from "react";
function Hooks(){
    // let cnt=0;
    // const [cnt,setCnt]=useState(0)
    // usestate(10)
    // setCnt(20)=>cnt=20
     // setCnt('uma')=>cnt=uma

    // const getCount=()=>{
    //            ++cnt
    //            console.log(cnt)
    // }
    const[name,setName]=useState('')//asinging name value to empty
    return(
        <div>
            <h1>React Hooks</h1>
            {/* <p>Count is:{cnt}</p> */}
            {/* <button onClick={()=>setCnt(cnt+1)}>Increment by 1</button>
            <button onClick={()=>setCnt(cnt-1)}>decrement by 1</button> */}
            <input type="text" onChange={(e)=> setName(e.target.value)}></input>
            <p>the name:{name}</p>
        </div>
    )
}
export default Hooks