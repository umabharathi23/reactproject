import {Link} from "react-router-dom"
import c21 from './c20.jpg';
//import {Link} from "react-router-dom"

function Sign(){
    return(
        <div style={{backgroundImage:`url(${c21})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',height:'682px'}}>
            <button style={{marginLeft:"1000px",background:'darkgreen',color:'white',borderRadius:'50px',height:'40px',width:'110px'}}>Insurance</button>
             
            {/* <b style={{marginLeft:"1000px",background:'blue',color:'white',borderRadius:'50px',height:'40px',width:'140px'}}>Home</b>
            <span style={{marginLeft:"40px",background:'blue',color:'white',borderRadius:'50px'}}>Contact</span>
            <span style={{marginLeft:"40px",background:'blue',color:'white',borderRadius:'50px'}}>About</span>
            <span style={{marginLeft:"40px",background:'blue',color:'white',borderRadius:'50px'}}>Service</span> */}
          {/* <button style={{marginLeft:"900px",background:'green',color:'white',borderRadius:'50px',height:'40px',width:'90px'}}>Home</button> 
          <button style={{marginLeft:"30px",background:'green',color:'white',borderRadius:'50px',height:'40px',width:'90px'}}>Contact</button>
          <button style={{marginLeft:"30px",background:'green',color:'white',borderRadius:'50px',height:'40px',width:'90px'}}>About</button>
            <button style={{marginLeft:"30px",background:'green',color:'white',borderRadius:'50px',height:'40px',width:'90px'}}>Service</button> */}
        <div style={{height:"600px",width:"1400px"}}>

            {/* <div style={{height:"690px",width:"800px",float:"left"}}> <img src={b3} height={690} width={800}></img></div> */}
            <div style={{height:"600px",width:"1400px",float:"left"}}><h1 style={{color:'darkgreen'}}>Welcome to our Bank Loans</h1>
            <br/>
            {/* <h5 style={{color:'red'}}>TERMS & CONDITIONS FOR SAVINGS BANK ACCOUNTS</h5>
           
            <li>Copyright Notice</li>
            <li>Trademarks</li>
            <li>Accuracy of Information</li>

            <li>No Unlawful or Prohibited Use</li> */}


<div style={{height:'150px',width:'1400px'}}>
    <div style={{height:'150px',width:'400px',background:'',float:'left'}}>
        {/* <h3 style={{color:'purple'}}>Accounts</h3>
        <h6>Savings Account</h6>
        <h6>Salary Account</h6>
        <h6>Investment Account</h6>
        <h6>Demat Account</h6> */}
    </div>
    <div style={{height:'150px',width:'420px',background:'',float:'left',marginLeft:'80px'}}>
    <h3 style={{color:'purple'}}>Grow your Investments with us</h3>
                    <h6>By making Fixed deposits</h6>
                    <h6>Retirement Planning</h6>
                    <h6>By Mutual Funds</h6>
                    <h6>Invest in Stocks</h6>
    </div>
    <div style={{height:'150px',width:'400px',background:'',float:'left',marginLeft:'100px'}}>
        <h3 style={{color:'purple'}}>Customer Care Number</h3>
        <h6>0008 300 300</h6>
        <h6>8880 123 654</h6>
    </div>
</div>
           
            <br/><br/>
            {/* <button style={{color:"white",background:"green",borderRadius:"50px",height:"40px",width:"120px",marginRight:"60px"}}>Signin</button> */}
 {/* */}            <p style={{color:"purple"}}><h5>Don't have an account then signin</h5> </p>
            <Link to={'/form5/'}><button  style={{background:"green",color:"white",marginRight:"40px",borderRadius:"50px",height:"40px",width:"120px"}}>Sign In</button></Link>
            <Link to={'/login/'}><button  style={{background:"green",color:"white",marginRight:"40px",borderRadius:"50px",height:"40px",width:"120px"}}>Log In</button></Link>
          
            {/* <button style={{color:"white",background:"green",borderRadius:"50px",height:"40px",width:"120px",marginRight:"0px"}}>Login</button> */}
            </div>
            {/* <Link to={'/login/'}><button  style={{background:"green",color:"white",marginRight:"40px",borderRadius:"50px",height:"40px",width:"120px"}}>Log In</button></Link>
           */}
            </div>
            </div>
       
    )
}
export default Sign