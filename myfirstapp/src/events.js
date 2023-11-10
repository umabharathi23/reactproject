function Events(){
    //using normal function
    // function hi(){
    //     alert("k")
    // }
    //using arrow function
    // const hi=(name)=>{
    //     // alert("hello"+" " +name);
       
    // };
    let arr=[1,2]
    // const hi=(res)=>{
    //     document.write(res)
       

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
// function h(person){
    
//     console.log(trainees)
// }
const get=(res)=>{
    res.map((ele,i)=>{
        document.write(i+1+"."+ele.name +"."+ele.rollno+"<br>")
    })
}


    return(
        <div>
            {/* <button onClick={hi}>Click</button>
            <button onClick={()=>hi(arr)}>Click</button> */}
            <button onClick={()=>get(trainees)}>click</button>
           
        </div>
    )
}
export default Events