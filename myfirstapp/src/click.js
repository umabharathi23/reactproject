function Click(){
    const f1=()=>{
        alert("clicked")
    }
    const f2=(name)=>{
        alert(name)
    }
    const f3=(e)=>{
        console.log(e.target.value)
    }
    return(
        <div>
            <h1>ReactEvents</h1>
            <button onMouseOver={f1}>click me</button><br/>
            <button onClick={()=>f2("harika")}>click me</button><br/>
            <input type="text" name="lname" onChange={f3}></input>
            
        </div>
    )
}
export default Click;








// function Click(){
//    return(
//     <button onMouseOver={()=>alert("hi")}>click</button>
    
//    )
// }
// export default Click