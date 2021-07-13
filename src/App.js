import React from "react"
import "./style.css"
import Button from "./button"
const App=()=>{
    return(
            <div className="container">
                    <h1>Hello Friends!</h1>
                    <h2>ReactJs Essentials Assignment 1</h2>
                <div className="service-details">
                        <img src="https://media.images.yourquote.in/user/large/0/0/1/412/400P2091.jpg" alt="ehsaas" />
                    <div className="service-hover-text">
                        <h3>Prathamesh Yadav</h3>
                        <h4>Developer</h4>
                        <p>Myself Prathamesh Yadav, I am a CSE Diploma Student from Nagpur.  am a Certified Python Programmer and also an Expert WordPress Developer and Designer, I love to prove myself than explaining </p>
                    </div>
                    <div className="service-white service-text">
                        <p>Prathamesh Yadav</p>
                        <Button buttonText="Connect"/>
                    </div>
                </div>
            </div>
    )
}

export default App