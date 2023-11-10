import React,{useState} from "react";
function Form2(){
    const [formdata,setformdata]=useState({
        'fname':'',
         'lname':''
        })
    return(
        <div>
            <form>
                <label>Firstname</label>
                <input type="text" name="fname"></input>
                <label>lastname</label>
                <input type="text" name="lname"></input>
            </form>
        </div>
    )
}
export default Form2