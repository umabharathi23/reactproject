import {Link} from "react-router-dom"
import c1 from './c1.jpg'
import c2 from './c2.jpeg'
import c4 from './c4.jpg'
import c6 from './c6.jpg'
import c7 from './c7.jpeg'
import c8 from './c8.jpg'
function Bankwebsite(){
    return(
       
        <div>
           <a href="#" style={{color:'green',marginLeft:"700px",fontSize:"20px"}}>Accounts</a>
           <a href="#" style={{color:'green',marginLeft:"30px",fontSize:"20px"}}>Loan</a>
           <a href="#"  style={{color:'green',marginLeft:"30px",fontSize:"20px"}}>Investments</a>
           <a href="#"  style={{color:'green',marginLeft:"30px",fontSize:"20px"}}>Insurance</a>
           <a href="#"  style={{color:'green',marginLeft:"30px",fontSize:"20px"}}>Otherservices</a>
           <br/>
           <center><h1 style={{color:'green'}}>Digital Banking Ways</h1></center>
           <center>
            <br/><br/>
           <div style={{height:'300px',width:'1200px',}}>
            <div style={{height:'250px',width:'1200px',background:''}}>
                <div style={{height:'250px',width:'400px',float:'left'}}>Digital Marketing
                <img src={c1} height={200} width={300} style={{marginRight:'0px'}}/></div>
                <div style={{height:'250px',width:'400px',float:'left'}}>Digital Home Loans
                <img src={c2} height={200} width={300} style={{marginRight:'0px'}}/></div>
                <div style={{height:'250px',width:'400px',float:'left'}}>Mobile Banking
                <img src={c4} height={200} width={300} style={{marginRight:'0px'}}/></div>
            </div>
            <div style={{height:'250px',width:'1200px'}}>
                <div style={{height:'250px',width:'400px',float:'left'}}><img src={c6} height={200} width={300} style={{marginRight:'0px'}}/></div>
                <div style={{height:'250px',width:'400px',float:'left'}}><img src={c7} height={200} width={300} style={{marginRight:'0px'}}/></div>
                <div style={{height:'250px',width:'400px',float:'left'}}><img src={c8} height={200} width={300} style={{marginRight:'0px'}}/></div>
            </div>
           </div>
           </center>
        </div>
    )
}
export default Bankwebsite