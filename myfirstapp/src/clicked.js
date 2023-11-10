import image from './l1.jpeg'
import image2 from './l2.jpeg'
const Clicked=()=>{
    const image=(e)=>{
        console.log("overed")
        e.target.style.height="200px"
        e.target.style.width="200px"
       
        e.target.style.borderRadius="100px"
        document.body.style.backgroundColor="green"
    }
const image2=(e)=>{
    console.log("out")
    e.target.style.height="200px"
        e.target.style.width="200px"
        e.target.style.borderRadius="100px"
        document.body.style.backgroundColor="white"
}
return(
    <div>
    <img src="logo192.png" alt="" onMouseOver={image} onMouseOut={image2} />
    <buttton  style={{border:"11px solid black",borderRadius:"1000px"}}>click</buttton>
    </div>
)
}
export default Clicked;