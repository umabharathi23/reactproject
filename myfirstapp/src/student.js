function Student(props){
    //let name='lekisha'
    //props are mutable
    return(
        // <div style={{margin:'10px',color:'pink'}}>
        // {/* <h1>Student name is Lekisha</h1> */} 
        // {/* <h1>Student name is {props.name}</h1> */}
        // <h1>Student rollno is {props.rollno}</h1>
        // </div>
        <>
         {/* <h1><tr><td>{props.name)</td></tr></h1>  */}



 <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td></tr>  
 {/* <h1> {props.res.name}   {props.res.rollno}</h1> */}



        {/* <ul>{props.name}{props.rollno}</ul>  */}
        </>
    );
}
export default Student