// import React,{useState} from "react"
// function Listtodo(){
//     const[data,setdata]=useState("");
//     const[number,setnumber]=useState("");
//     const[todos,settodos]=useState([]);
//     function handleSubmit(event){
//          event.preventDefault()
//          console.log(data)
//          const newtodos=[...todos,data];
//          settodos(newtodos)
//         //  console.log(number)
//         //  const p=data-number
//         //  console.log(p)
//         setdata("");// to make input field empty after entering data
    
//     }
//     return(
        
//         <>
//         <h2>To do activities</h2>
       
//         <form  onSubmit={handleSubmit}>
//         <label>Bus Number</label>
//             <input type="text"  style={{border:"1px solid black",marginRight:"20px"}}onChange={(e)=>setdata(e.target.value)}/>
           
//             <label>Count</label>
//             <input type="text" name="number" style={{marginRight:"20px"}} onChange={(e)=>setnumber(e.target.value)}/>
//             <input type="submit" name="add" value="add"/>
//         </form>
//         <button style={{border:"1px solid black" ,width:"50px",marginLeft:"50px"}}>{number}</button></>
        
        
//     )
// }
// export default Listtodo







import React,{useState} from "react"
import Todolist1 from './todolist1';

function Listtodo(){
    const[data,setdata]=useState("");
    const[todos,settodos]=useState([]);
    const[numbers,setnumbers]=useState("");
    const[hi,sethi]=useState("");
    
        function handlesubmit(event){
        event.preventDefault()
        // console.log(data)
        const newtodos=[...todos,data];
        settodos(newtodos);
        setdata(" ")
        console.log(numbers)
        const k=[...hi,numbers]
        sethi(k);
        setnumbers("")

       

    }
    return(
        <>
        <h2>To Do Lidt</h2>
        {/* <p>{numbers}</p> */}
        <form onSubmit={handlesubmit}>
            <input type="text" name="data" value={data} onChange={(e)=>setdata(e.target.value)}/>
            {/* <input type="text" name="data" value={numbers} onChange={(e)=>setnumbers(e.target.value)}/> */}
            <input type="submit"/></form>
        <form onSubmit={handlesubmit}>
            <input type="text" onChange={(e)=>setnumbers(e.target.value)}/>
            <input type="submit"/>
        </form>
            <Todolist1  todolist={todos}/>
            </>
        
    )
}
export default Listtodo