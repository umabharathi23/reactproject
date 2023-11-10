import Smily from './Smily.png';
import React ,{Component} from 'react';
function Home(){
    let ss={
        background:'pink',
        color:'green',
        marginTop:'80px',//dont use margin top
        paddingTop:'60px'

    }
    return( 
       <div style={{
        background:'pink',
        color:'green',
        marginTop:'80px',//dont use margin top
        paddingTop:'60px'

    }}>
    
        <h1>This is home</h1>
         <img src={Smily} height={30} width={30}></img>
        </div>
    )
}
export default Home