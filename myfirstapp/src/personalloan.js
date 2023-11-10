import h7 from './h7.jpg'
// import {Link} from "react-router-dom"
// function Personalloan(){
    
//     return(
       
//         <div style={{height:'600px',width:'1400px'}}>
//             <br/>
//             <br/>
//             <br/>
//             <div style={{height:'600px',width:'800px',float:'left',}}><img src={c10} style={{height:'600px',width:'850px',borderRadius:'50px'}}/></div>
//             <div style={{height:'600px',width:'500px',float:'left',border:'7px solid green',borderRadius:'50px',marginLeft:'90px'}}>
//             <h1 style={{color:'darkgreen'}}>Personal Loan</h1>
//                 <br/>
//                 <h4>Choose Your Loan Amount</h4>
//                 <br/>
//                 <form>
//                 <span style={{marginRight:'20px',fontWeight:'bold'}} >5,00,000</span>
//                 <span style={{marginRight:'20px',fontWeight:'bold'}} >7,00,000</span>
//                 <span style={{marginRight:'0px',fontWeight:'bold'}}>10,00,000</span>
//                 <br/>
//                 <br/>
//                 <h4>Loan Period And Repayment</h4>
//                 <br/>
//                 <span style={{marginRight:'0px',fontWeight:'bold'}}>1 Month :
//                 Repayment of 87335</span><br/><br/>
//                 <span style={{marginRight:'0px',fontWeight:'bold'}}>6 Months: Repayment of 2,33,598</span><br/>
//                 <br/>
//                 <span style={{marginRight:'0px',fontWeight:'bold'}}>12 Months: Repayment of 7,84,456</span><br/>
//                 <br/><br/><br/><br/><br/><br/><br/>
//                 <Link to={`/pfl/`}><button  style={{height:'40px',width:'120px',background:'darkgreen',borderRadius:'50px',color:'white'}}>Apply Loan</button></Link>
//                 </form>
//             </div>
        
//         </div>
//     )
// }
// export default Personalloan





// {/* <form>
//             <input type="text" name="name" value="name">Name</input>
//             <input type="number" name="phonenumber" value="phonenumber">phonenumber</input>
//             <input type="email" name="email" value="email">Email</input>
//             <input type="text" name="country" value="country">Country</input>
//             </form> */}
import c10 from './c10.jpg'
import c11 from './c12.jpg';
import {Link} from "react-router-dom"
function Personalloan(){
    // function hi(){
    //     const n=3
    //     if(n==3){
    //     window.location.assign(`/bank2/`)
    //     }
    // }
    return(
       
        <div style={{height:'600px',width:'1400px'}}>
            <br/>
            <br/>
            <br/>
            <div style={{height:'600px',width:'800px',float:'left',}}><img src={h7} style={{height:'600px',width:'850px',borderRadius:'50px'}}/></div>
            <div style={{height:'600px',width:'500px',float:'left',border:'7px solid green',borderRadius:'50px',marginLeft:'90px'}}>
            <h1 style={{color:'darkviolet'}}>Personal Loan</h1>
                <br/>
                
                <h4 style={{color:'darkgreen'}}> Your Personal Loan Amount</h4>
                <br/>
                <form>
                   
                <span style={{marginRight:'20px',fontWeight:'bold'}} >1,00,000</span>
                <span style={{marginRight:'20px',fontWeight:'bold'}} >5,00,000</span>
                <span style={{marginRight:'0px',fontWeight:'bold'}}>10,00,000</span>
                <br/>
                <br/>
                <h4 style={{color:'darkgreen'}}>Loan Period For Repayment</h4>
                <br/>
               <span style={{marginRight:'20px',fontWeight:'bold'}}>One Year</span>
               <span style={{marginRight:'20px',fontWeight:'bold'}}>Three Years</span>
               <span style={{marginRight:'0px',fontWeight:'bold'}}>Five Years</span><br/><br/>
              <center>
             <div style={{background:'',height:'100px',width:'400px'}}>
             <p style={{fontWeight:'bold'}}>Calculate your Interset based on your loanperiods
               
                and check your total repayment amount along with your loan
                by clicking on check button given below and apply your loan
               </p>
               </div>
               </center><br/>
                {/* <button  style={{height:'40px',width:'120px',background:'darkgreen',borderRadius:'50px',color:'white'}}>Apply Now</button> */}
                <pre style={{fontWeight:'bold',color:'purple'}}>Check Repayments For These Loan Amounts</pre>
                <Link to={`/personalcalci1/`}><button style={{height:'40px',width:'120px',background:'darkgreen',borderRadius:'50px',color:'white',marginRight:'10px'}}>One Lakh</button></Link>
                <Link to={`/personalcalci2/`}><button style={{height:'40px',width:'120px',background:'darkgreen',borderRadius:'50px',color:'white',marginRight:'10px'}}>Five Lakhs</button></Link>
                <Link to={`/personalcalci3/`}><button style={{height:'40px',width:'120px',background:'darkgreen',borderRadius:'50px',color:'white'}}>Ten Lakhs</button></Link>
                </form>
            </div>
        
        </div>
    )
}
export default Personalloan





{/* <form>
            <input type="text" name="name" value="name">Name</input>
            <input type="number" name="phonenumber" value="phonenumber">phonenumber</input>
            <input type="email" name="email" value="email">Email</input>
            <input type="text" name="country" value="country">Country</input>
            </form> */}