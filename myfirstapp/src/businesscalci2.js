import {useState} from "react"
import c20 from './c20.jpg'
import {Link} from 'react-router-dom'
function Businesscalci2(){
    const[values,setvalue]=useState('')
    function handlesubmit(e){
         e.preventDefault()
        // console.log((parseInt(100000)*(0.05*values))+parseInt(100000))
    }
    
    return(
        <div style={{backgroundImage:`url(${c20})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'682px'}}>
        {/* <h1 style={{color:'darkgreen'}}>Your EMI Calculator</h1> */}
        <br/>
        <h1 style={{color:'red'}}>You Selected Business Loan Amount is:5,00,000</h1><br/>
        <h1 style={{color:'darkgreen'}}>Our Bank's Rate of Interset is 12%</h1><br/>
         <form onSubmit={handlesubmit}>
            <input type="radio"  name="values" value="1" onChange={(e) => setvalue(e.target.value)} ></input>
            <label style={{fontWeight:'bold',marginRight:'10px'}}>1 year</label>
            <input type="radio" name="values" value="3" onChange={(e) => setvalue( e.target.value)}></input>
            <label style={{fontWeight:'bold',marginRight:'10px'}}>3 years</label>
            <input type="radio" name="values" value="5" onChange={(e) => setvalue( e.target.value)}></input>
            <label style={{fontWeight:'bold'}}>5 years</label>
            {/* <input type="submit"></input>
             */}
            

            </form> 
        {/* <button>{(parseInt(500000)*(0.12*values))+parseInt(500000)}</button> */}

        <span style={{color:'purple',fontWeight:'bold',marginRight:'150px'}}>Your Selected Duration is</span> <button style={{marginLeft:'20px'}}>{values}</button><br/><br/>
        <span style={{color:'purple',fontWeight:'bold',marginRight:'40px'}}>Your Intesrt as per your selscted duration is</span><button style={{fontWeight:'bold',border:'',marginLeft:"10px"}}>{(parseInt(500000)*((0.12)*values))}</button><br/><br/>
        <span style={{color:'purple',fontWeight:'bold',marginRight:'80px'}}>You need to the total amount of</span> <button style={{fontWeight:'bold'}}>{(parseInt(500000)*(0.12*values))+parseInt(500000)}</button><br/><br/>
        <span style={{color:'purple',fontWeight:'bold',marginRight:'50px'}}>Your Montly repayment</span> <button style={{fontWeight:'bold',marginLeft:'100px'}}>{Math.round((((parseInt(100000)*(0.12*values))+parseInt(100000)))/12)}</button><br/><br/>
        <span style={{color:'purple',fontWeight:'bold',marginRight:'120px'}}>Your Half Yearly repayment</span> <button style={{fontWeight:'bold'}}>{((parseInt(500000)*(0.12*values))+parseInt(500000))/2}</button><br/><br/>
        <span style={{color:'purple',fontWeight:'bold',marginRight:'120px'}}>Your 3 months repayment</span> <button style={{fontWeight:'bold'}}>{((parseInt(500000)*(0.12*values))+parseInt(500000))/4}</button><br/><br/> 
        <Link to={`/businessloanform/`}><button style={{height:'40px',width:'120px',background:'purple',borderRadius:'50px',color:'white'}}>Apply Loan</button></Link>
        
      
        </div>
    ) }
 export default Businesscalci2