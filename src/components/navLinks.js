import React from 'react'
import { Link } from "gatsby"

 const navLinks = () => {
    return (
        <div className="grid grid-cols-3 mx-auto my-16">
            <Link to="/" activeStyle={{ backgroundColor: "black", color:"white" }}><button className="ring-black ring-1 min-w-full">About Me</button></Link>
            <Link to="/projects" activeStyle={{backgroundColor: "black", color:"white" }}><button className="ring-black ring-1 min-w-full">Projects</button></Link>
            <Link to="/contact" activeStyle={{ backgroundColor: "black", color:"white"   }}><button className="ring-black ring-1 min-w-full">Contact</button></Link>
        </div>
    )
}

 export default navLinks