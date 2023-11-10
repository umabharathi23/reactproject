
// function About(props){
//     return(
//         <div style={{background:'green',color:'cyan'}}>
//             <h1>This is about page {props.num}</h1>
            
//         </div>
//     )
// }
// export default About
import React,{Component} from 'react'
class about extends Component{
    render(){
        return(
            <div>
                <h1>This is About page with class componebt {this.props.name} {this.props.rollno}</h1>
            </div>
        )
    }
}
export default about