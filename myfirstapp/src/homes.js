import React from "react"
import {useLocation,useNavigate} from "react-router-dom";
function Homes(){
    const location=useLocation()

    return(
        <>
        <h1>Hello {location.state.id} and welcome to the home</h1>
        </>
    )
}
export default Homes