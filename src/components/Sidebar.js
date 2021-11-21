import React from 'react'
import { Portrait }  from './Portrait'
import  ContactButtons  from './contactButtons'

const largeText = {
fontSize: "4vw",
fontFamily: "aktiv-grotesk, sans-serif",
fontWeight: 700,
fontStyle: "normal",
color: "#212529",
marginTop: "1rem",
marginLeft: "1rem"
}
const bioText = {
    fontSize: "0.9em",
    fontFamily: "neue-haas-grotesk-text",
    fontWeight: 400
    
}
const bioText_Bold = {
    fontSize: "0.9em",
    fontFamily: "neue-haas-grotesk-text",
    fontWeight: 700 
}
const diamond = {
    display:"inline",
    fontSize: "1.5em",
    marginLeft: "0.8vw",
    paddingRight: "1vw",
    lineHeight: "1vh"
}

 const Sidebar = () => {
    return (
        <div className="fixed flex-col w-2/6 h-full border-black border-r">
            <div>
            <h2 style={largeText} className="text-7xl font-bold pt-4 mt-2 mb-3 mx-8">Tyler<br/>Zwiep</h2>
            <ContactButtons />
            <div className="ml-3 mt-3 mb-2">
            <p style={diamond}>⬥</p><p style={diamond}>⬥</p> <p style={diamond}>⬥</p><p style={diamond}>⬥</p>
            </div>
            <p style={bioText_Bold} className="mx-6 mt-1" >Tyler is a developer based in Collingwood, Ontario.</p>
            <p className="mx-6 font-light" style={bioText}> Combining his passion for design, photography, and digital media creation with computer programming
                    and development –
                    Tyler loves to create websites, GUIs, and user interfaces that are both aesthetically pleasing
                    and technically proficient!
                </p>
                
             </div>
            
             <div className="mt-4 border-black border-t">
            <Portrait/>
             </div>
        </div>

    )
}

 export default Sidebar