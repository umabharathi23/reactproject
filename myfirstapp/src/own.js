import React,{useState} from "react";
function Own(){
  const[number,setnumber]=useState();
  const  handle=(e)=>{
    //  setnumber(e.target.value)
    if (e === "=") {
      setnumber(eval(number))
    }
    else if (e === "C") {

      setnumber("");
    } 
    else {
      setnumber((firstoutput) => firstoutput + e) ;
     }
  };
   return(
   <div>
    <button>{number}</button>
    {/* <label>1</label> */}<br/>
    <input type="button"  value ="1" onClick={()=>handle("1")} />
    <input type="button" name="number" value ="2" onClick={()=>handle("2")}/>
    <input type="button" name="number" value ="3" onClick={()=>handle("3")}/><br/>
    <input type="button" name="number" value ="4" onClick={()=>handle("4")}/>
    <input type="button" name="number" value ="5" onClick={()=>handle("5")}/>
    <input type="button" name="number" value ="6" onClick={()=>handle("6")}/><br/>
    <input type="button" name="number" value ="7" onClick={()=>handle("7")}/>
    <input type="button" name="number" value ="8" onClick={()=>handle("8")}/>
    <input type="button" name="number" value ="9" onClick={()=>handle("9")}/><br/>
    <input type="button" name="number" value ="0" onClick={()=>handle("0")}/>
    <input type="button" name="number" value ="=" onClick={()=>handle("=")}/>
    <input type="button" name="number" value ="c" onClick={()=>handle("c")}/><br/>
    <input type="button" name="number" value ="+" onClick={()=>handle("+")}/>
    <input type="button" name="number" value ="-" onClick={()=>handle("-")}/>
    <input type="button" name="number" value ="*" onClick={()=>handle("*")}/>

   </div>
   )
}
export default Own