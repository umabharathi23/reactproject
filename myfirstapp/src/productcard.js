// function Productcard(props){
//     return(
//         <div className="card">
//             <img src={props.res.image} />
//             <p>{props.res.title}</p>
//             <p>{props.res.price}</p>
//             <p>{props.res.category}</p>
//         </div>
//     )
// }
function Productcard({title, price, image, category}){
    return(
        <div className="card">
            <img src={image} />
            <p>{title}</p>
            <p>{price}</p>
            <p>{category}</p>
        </div>
    )
}
export default Productcard;