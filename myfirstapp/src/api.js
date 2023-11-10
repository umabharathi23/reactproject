import React,{useEffect,useState} from "react"
const Api=()=>{
    const[data,setData]=useState()
    useEffect(()=>{
        fetch('https://freetestapi.com/api/v1/users/1  ').then(
            res=>res.json()
        ) .then(json => setData(json))
        
    },[])

    return(
         <div>
            {data.map((ele,i)=>{
                <li>{ele.name}</li>
            })
            }
         </div>
        )
    }

export default Api
