import Smily from './Smily.png';
import React from 'react'
import { Link } from "react";
const Foodproducts =({data})  =>{
    const hello=()=>{
        // <h1>hu</h1>

        
        document.write('<h1 style="text-align: center; color:Green">Your Order has Placed</h1>')
        document.write('<h1 style="text-align: center;color:red">Visit Again</h1>')
       
        
        
        
    }
    return (
    
        <div>
            <div className="row">
                {data.map(data=>
                    <div className="col-md-3">
                        <div class="card" style={{"width":"20rem"}}>
                            <img class="card-img-top" src={data.recipe.image} alt="Card image cap"/>
                            <div class="card-body">
                                <center>
                                    <h5 class="card-title">{data.recipe.label}</h5>
                                    <p class="card-text">Total calories:{Math.round(data.recipe.calories)}</p>
                                    <a href="#" class="btn btn-primary">Buy</a>
                                    {/* <a href="#" class="btn btn-primary" onClick={hello} style={{marginLeft:'40px'}}>Get Info</a> */}
                                    {/* <a href="#" class="btn btn-primary" onClick={<Link to = {data.recipe.image} target="_self"> {data.recipe.label} </Link>} style={{marginLeft:'40px'}}>Get Info</a> */}
                                  <a href={data.recipe.image} onClick={hello}>hi</a>
                                    

                                </center>
                            </div>
                        </div>
                    </div>)}
            </div>
            </div>
    )
}
export default Foodproducts