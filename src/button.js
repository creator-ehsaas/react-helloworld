import React from "react"

const Button=({buttonText}, {btnLink})=>{
    return(
        <a href={btnLink}><button className="btn hover">{buttonText}</button></a>
    )
}

export default Button