import Student from "./student";
function Traineess(){
    let traineess=[{
        name:'Lekisha',
        rollno:1234
    },{
        name:'Monisha',
        rollno:3456
    },{
        name:'Manideep',
        rollno:5678
    }
]

   return(
    <>
    <table border=" " >
        <tr><th>nmae</th><th>rollno</th></tr>
    
    {
    traineess.map((ele,i)=>{
        return(<Student name={ele.name}rollno={ele.rollno}></Student>)
    })
    }
    </table>
    </>
   )
/* return(
    <>
    

<table border={1} cellspacing={0} align="center" width={"300px"}>
<tr><th>S.No</th><th>Name</th><th>Rollno</th></tr>
{
   
        traineess.map((ele,i)=>
        {
            return(<tr><td>{ele.name}</td><td>{ele.rollno}</td></tr> )
        })
         
    }
  
</table>



       </>
    ) */}
export default Traineess;