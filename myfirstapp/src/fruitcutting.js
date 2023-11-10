import full from './p1.jpeg'
import cut from './p2.jpeg'
import { useState } from "react"
function Apple(){
   const[image,cutting]=useState(false)
    return(
        <div>  
            <p onMouseOver={()=>cutting(true)}>full</p>
            <p onMouseOver={()=>cutting(false)}>half</p>
           {
            // light===true? <img src="lighton.jpg"/> : <img src="lightoff.jpg"/>
            image===true?<img src={full} />:<img src={cut}/>
           }
        </div>
    )
}
export default Apple;