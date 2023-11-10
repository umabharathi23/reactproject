import React,{useRef,useState} from 'react'
function Crud(){
    
        const list=[{
            id:1,
            name:"uma",
            college:"acet"
        },{
            // id:2,
            // name:"suryakantam",
            // college:"aec"
        },]
        const[lists,setList]=useState(list)
        const[updateState,setupdateState]=useState(-1)
        return(
            <div>
                <AddList setList={setList}/>
                <form onSubmit={handleSubmit}>
            <table style={{marginLeft:"600px"}}>
            {
                lists.map((current)=>(
                    updateState ==current.id? <EditList current={current} lists={lists} setLists={setList}/>:
                    <tbody>
                   
                    <tr>
                    <td>{current.name}</td>
                    <td>{current.college}</td>
                    <td>
                        <button onClick={()=>handleSubmit(current.id)}>Edit</button>
                        <button  onClick={()=>handleDelete(current.id)}>delete</button></td>
                        
                        </tr>
                        </tbody>
                        
                ))
            }</table>
            </form></div>
        )
        function handleEdit(id){
            setupdateState(id)
        }
        function handleDelete(id){
            const newList=lists.filter((li)=>li.id!==id)
            setList(newList)
        }
        function handleSubmit(event){
            event.preventDefault()
            const name=event.target.elements.name.value
            const college=event.target.elements.college.value
        }
    }
    function EditList(current,lists,setList){
        
        // function handleInput(event){
        //     const name=event.target.name;
        //     const value=event.target.value;
        //     lists.map((li)=>(
        //         li.id === updateState? {...li,name:name,college:college}:li
        //     ))

        //     setList(newList)
        //     setUpdateState(-1)

        // }
        return(
            <tr>
                <td><input type="text" name="name"  value={current.name}/></td>
                <td><input type="text" name="college" value={current.college}/></td>
                <td><button type="submit" ></button></td>

            </tr>
        )
    }
    function AddList({setList}){
        const nameRef=useRef()
        const collegeRef=useRef()

        function handleSubmit(event){
            event.preventDefault();
            const name=event.target.elements.name.value;
            const college=event.target.elements.college.value;
            const newList={
                id:3,
                name,
                college
            }
            setList((prevList)=>{
                return prevList.concat(newList)
            })
             nameRef.currentvalue=" "
              collegeRef.currentvalue=" "
        }
        return(
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  placeholder="name" ref={nameRef}/>
                <input type="text" name="college" placeholder="college" ref={collegeRef}/>
                <button type="submit" >Add</button>
            </form>
        )
    }
    

export default Crud