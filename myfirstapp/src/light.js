// import onn from './l2.jpeg'
// import off from './l1.jpeg'
// import { useState } from "react"
// function Light(){
//    const[light,bulb]=useState(false)
//     return(
//         <div>  
//             <button onClick={()=>bulb(true)}>onn</button>
//             <button onClick={()=>bulb(false)}>off</button>
//            {
//             // light===true? <img src="lighton.jpg"/> : <img src="lightoff.jpg"/>
//             light===true?<img src={onn}/>:<img src={off}/>
//            }
//         </div>
//     )
// }
// export default Light;




















import on from './l2.jpeg';
import of from './l1.jpeg';
import {useState} from "react"
function Light(){
    const[light,bulb]=useState(false)
    return(
        <div>
            <button onClick={()=>bulb(true)}>on</button>
            <button onClick={()=>bulb(false)}>of</button>
            {
                light===true? <img src={on}/>:<img src={of}/>
            }
        </div>
    )
}
export default Light