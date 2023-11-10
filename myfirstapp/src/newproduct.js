import useState from "react"
import axios from "axios";
import product from './product.css'
function NewProduct(){
    const[data,setData]=useState([]);
    const[cnt,setCnt]=usestate([cnt])
    const api='https://fakestoreapi.com/products';
    useEffect(()=>{
        getproducts()
    })
    function getproducts(){
        axios.get(api).then((response=>{
            // console.log(response.data)
            setData(response.data)
        }))
    }
    return(
        <div>
           <h1>New producy</h1>
           <p>{cnt}</p>
           <button></button>

           {
            data.map((ele,i)=>{
                return (
                    <div className="card">
                       <img src={ele.image} alt =" "></img>
                        <p>{ele.title}</p>
                        <p>{ele.price}</p>
                        <p>{ele.category}</p>
                    </div>
                )
            })
           }
        </div>
    )
}
export default Newproduct