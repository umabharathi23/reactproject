import Foodproducts from './foodproducts'; 
import { Link } from "react-router-dom"
import React,{useState} from 'react'
const App=()=>
{
    const [Search,setSearch]=useState('');
    const [data,setData]=useState([]);
    const YOUR_APP_ID="097f5614";
    const YOUR_APP_KEY="b39ba9c87c6a168c8ace8a073f14edc3"
    const submitHandler=e=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${Search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`) .then(
        response =>response.json()
        ).then(
            data => setData(data.hits)
        ) 
        
    }
    return (

    <div><h1></h1>
   
    
    <form onSubmit={submitHandler}>
        {/* <a href='/.Home' style={{marginLeft:"20px"}}>Home</a>
        <a href="trainess" style={{marginRight:'0px'}} target="_blank">Trainess</a>
        <a href="#" style={{marginLeft:"20px"}}>Contact</a>
        <a href="#" style={{marginLeft:"20px"}}>About Us</a>
        <a href="#" style={{marginLeft:"20px"}}>Service </a> */}
        {/* <br/><br/>
        <input type="text" value={Search} onChange={(e)=>setSearch(e.target.value)}/> */}
        {/* <input type="submit"  className="btn btn-primary" value="Search" style={{ width: "100px", height: "30px",marginLeft:"40px",paddingBottom:"30px"}} /> */}
    </form>

     {data.length>=1 ? <Foodproducts data={data}/>:null }
    </div>
    )
}
export default App