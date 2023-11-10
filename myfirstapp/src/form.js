import {useState} from "react";
function Form(){
    const [name,setName]=useState('');//let name="empty"
    const [rno,setRno]=useState('');//let 
    // console.log(name);
    // console.log(rno);
    function  handleSubmit(event){
        event.preventDefault()// WITHOUT this data is going somewhere to top this asusal method we are preventing the regular manner
        // so to get the data in consle we use preventDefault.
        // we can capture the data
        // default event 
        console.log(name);
        console.log(rno);//thw entered data will be in console //2 usestate methods for getting input values
    }
    return(
        <>
        <h1>This is form</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text"  onChange={(e)=>setName(e.target.value)}/><br/>
            <label>rollno</label>


            <input type="text"  onChange={(e)=>setRno(e.target.value)}/>
            <br/>
            {/* <input type="text" name ="rollno" onChange={(e)=>setName(e.target.value)}/>
            <br/> */}
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
            </form></>
    )
}
export default Form