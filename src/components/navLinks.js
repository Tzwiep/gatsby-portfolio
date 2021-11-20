import React from 'react'
import { Link } from "gatsby"

 const navLinks = () => {
    return (
        <div className="grid grid-cols-3 mx-auto mt-6 mb-12">
            <Link to="/" activeStyle={{ backgroundColor: "black", color:"white" }}><button className="border border-black min-w-full">About Me</button></Link>
            <Link to="/projects" activeStyle={{backgroundColor: "black", color:"white" }}><button className="border-t border-b border-black min-w-full">Projects</button></Link>
            <Link to="/contact" activeStyle={{ backgroundColor: "black", color:"white"   }}><button className="border border-black min-w-full">Contact</button></Link>
        </div>
    )
}

 export default navLinks