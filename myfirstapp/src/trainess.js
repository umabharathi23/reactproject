import Student from "./student";
function Trainees(){
    let trainees=[{
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
        <h2>Trainees list</h2>
 <table border={1} cellspacing={0} align="center" width={"300px"}>
    <tr><th>S.No</th><th>Name</th><th>Rollno</th></tr>
    {
            trainees.map((ele,i)=>
            {
                return (<Student index={i} name={ele.name} rollno={ele.rollno}/>)
            })
        }
</table> 



        </>
    )

}
export default Trainees;