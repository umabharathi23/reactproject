import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
const Ownex=()=>{
    let student=[{
        name:'uma',
        rollno:12
    },
    {
        name:'bharathi',
        rollno:13
    }]
    
//const {id} =useParams()
    // const Deletestu(id){
    const handleedit=(i)=>{
        console.log(i)
        //alert("hi")

    }
    
     return(
        <div>
            <table border={1} cellspacing={10} cellpadding={5}>
            {
                student.map((ele,id)=>{
                    return(
                        <tr>
                        <td>{id+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.rollno}</td>
                        <td><button >Delete</button></td>
                        {/* <td><button onClick={()=>{handleedit(i)}}>edit</button></td> */}
                        <td><Link to={`/editform3/${ele.id}`}><button onClick={()=>{handleedit(id)}}>edit</button></Link></td>
                        </tr>
                    
                    )
                })
            }
            </table>
        </div>
    )
}

export default Ownex;