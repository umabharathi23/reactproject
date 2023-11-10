import Student from "./student"
function Trainees1(){

    let trainees1=[{
        name:'uma',
        roll:123
    },
    {
        name:'harika',
        roll:124
    }]

    return(
    <>
    <h2>trainees list</h2>
    <table border={1}>
        <ul>
    <tr><th>S.no</th><th>Name</th><th>Rll no</th></tr></ul>
    
    {

         trainees1.map((ele,i)=>
         {
            return(<Student index={i} name={ele.name} roll={ele.roll}/>)
        })
    }
        </table>
       </>
    )
}
export default Trainees1