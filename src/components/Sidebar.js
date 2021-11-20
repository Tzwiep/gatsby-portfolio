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

 const Sidebar = () => {
    return (
        <div className="fixed flex-col w-2/6 h-full border-black border-r">
            <div>
            <h2 style={largeText} className="text-7xl font-bold pt-4 mt-2 mb-4 mx-8">Tyler<br/>Zwiep</h2>
            <ContactButtons />
            <p className="text-2xl pl-6 py-6 inline">⬥</p><p className="text-2xl pl-8 py-6 inline">⬥</p> <p className="text-2xl pl-8 py-6 inline">⬥</p><p className="text-2xl pl-8 py-6 inline">⬥</p>
            <p className="font-bold mx-6 mt-1">Tyler is a developer based in Collingwood, Ontario.</p>
            <p className="mx-6 font-light"> Combining his passion for design, photography, and digital media creation with computer programming
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