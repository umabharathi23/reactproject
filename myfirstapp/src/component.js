import {useState} from "react";
function Component(){
    // let arr=[1,2,3]
    
    const[arr,setName]=useState([1,2,3])//asinging name value to empty
    return(
        <div>
            <h1>React Hooks</h1>
            <ul>
            
            {
                arr.map((ele)=>{
                    return(<li>{ele}</li>)
                })
            }
            </ul>
        </div>
    )
}
export default Component