import h1 from './h1.jpg';
import c15 from './c15.jpg';
import h3 from './h3.jpg';
import h4 from './h4.jpeg';
import h5 from './h5.jpg';
import h7 from './h7.jpg';
import {Link} from 'react-router-dom';
import c20 from './c20.jpg'

    function Bank2(){

    // const hi=()=>{
    //   window.location.assign(`/houseloan/`)
    // }
    const hi2=()=>{
      window.location.assign(`/carloan/`)
    }
    const hi3=()=>{
      window.location.assign(`/educationloan/`)
    }
    const hi4=()=>{
      window.location.assign(`/businessloan/`)
    }
    const hi5=()=>{
      window.location.assign(`/goldloan/`)
    }
    const hi6=()=>{
      window.location.assign(`/personalloan/`)
    }
    return(
       <div >
         <br/>
         <br/>
        <h1 style={{color:'darkgreen'}}>Our Bank Loans</h1>
       <br/>
      
      
       
       <center><div style={{height:'210px',width:'1200px',background:''}}>
       <div style={{height:'200px',width:'400px',float:'left',marginTop:'0px'}}><img src={h1} height={200} width={300} style={{marginRight:'000px',background:"pink",borderRadius:'60px'}}></img><br/>
       <div> 
        <Link to={`/houseloan`}><button style={{background:"blue",color:"white",borderRadius:'50px',border :'blue',height:'40px' ,marginTop:'8px'}}>Apply Loan</button></Link>
      {/* <button onClick={hi} style={{background:"blue",color:"white",borderRadius:'50px' }}>Apply Loan</button> */}
        </div></div>
       <div style={{height:'200px',width:'400px',background:'',float:'left ',marginLeft:'10px',marginRight:'50px'}}><img src={c15} height={200} width={300} style={{marginRight:'0px',borderRadius:'80px'}}/>
       <div>
        {/* <button style={{background:"blue",color:"white",borderRadius:'50px'}}>Apply Loan</button></div></div> */}
        <Link to={`/carloan`}><button  onClick={hi2}style={{background:"blue",color:"white",borderRadius:'50px',border :'blue',height:'40px',marginTop:'8px'}}>Apply Loan</button></Link></div></div>

       <div style={{height:'200px',width:'300px',background:'',float:'left',marginLeft:'10px'}}><img src={h3} height={200} width={300} style={{marginRight:'0px',borderRadius:'60px'}}/>
       <div><button onClick={hi3}style={{background:"blue",color:"white",borderRadius:'50px',border :'blue',height:'40px',marginTop:'8px'}}>Apply Loan</button></div></div>
      
      
        </div>
        <br/>
        <br/>
        <div style={{height:'200px',width:'1200px'}}>

      
         <div style={{height:'200px',width:'400px',float:'left',marginTop:'0px'}}><img src={h4} height={200} width={300} style={{marginRight:'000px',background:"",borderRadius:'60px'}}></img>
         <div><button  onClick={hi4} style={{background:"blue",color:"white",borderRadius:'50px',border :'blue',height:'40px',marginTop:'8px'}} >Apply Loan</button></div></div>
       <div style={{height:'200px',width:'400px',background:'',float:'left ',marginLeft:'10px',marginRight:'50px'}}><img src={h5} height={200} width={300} style={{marginRight:'0px',borderRadius:'60px'}}/>
       <div><button  onClick={hi5} style={{background:"blue",color:"white",borderRadius:'50px',border :'blue',height:'40px',marginTop:'8px'}}>Apply Loan</button></div></div>
       <div style={{height:'200px',width:'300px',background:'',float:'left',marginLeft:'10px'}}><img src={h7} height={200} width={300} style={{marginRight:'0px',borderRadius:'50px'}}/>
       <br/><div><button  onClick={hi6} style={{background:"blue",color:"white",borderRadius:'50px',border :'blue',height:'40px',marginTop:'8px'}}>Apply Loan</button></div></div>
        
        
      </div>
     
      </center>
       
        </div>
        
       
    )
}
export default Bank2