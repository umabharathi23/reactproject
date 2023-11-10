import {useState} from "react"
// import axios from "axios"
// function Sample(){
//     const hi=()=>{
//     const c=["rock","paper","s"]
//     r=
//     }
//     // const[email,setemail]=useState('')
//     // const handlesubmit=(e)=>{
//     //     e.preventDefault()
//     //     axios.post('http://localhost:2222/addsample',{email}).then((res)=>
//     //      console.log(res.data))
//     //      console.log(email)

//     // }
//     // return(
//     //     <>
//     //     <form onSubmit={handlesubmit}>
//     //         <input type="email" name="email" onChange={(e)=>{setemail(e.target.value)}}></input>
//     //         <input type="submit"></input>
//     //         </form></>
//     // )
//     return(
//         <>
        
//         </>
//     )
// }
// export default Sample













function Sample(){
    const [value,setvalue]=useState('')
    const c=['NY2Xz','In92ipX','n1ee8rg','aPX6j','il3l7o','e1tR6']
    const hi=()=>{
        const r=Math.floor(Math.random()*c.length); 
        setvalue(c[r])
        console.log(value)
    }
    return(
        <>
        <p>{value}</p>
        {/* <button  onClick={hi}>Check</button> */}
        </>
    )
}
export default Sample