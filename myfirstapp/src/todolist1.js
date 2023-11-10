import React from "react"
const Todolist1=({todolist})=>{
    return(
        <div>
            {todolist.map((todo)=>
                <div>
                    <h3>{todo} &nbsp; <button>Delete</button></h3>
                </div>) }
        </div>
    )
}
export default Todolist1
