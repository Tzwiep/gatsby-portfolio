import React from 'react'
import { Portrait }  from './Portrait'
import  ContactButtons  from './contactButtons'
import * as SidebarStyle from "./Sidebar.module.css"

 const Sidebar = () => {
    return (
        <>
        <div className="md:fixed text-center md:text-left flex flex-row items-center md:flex-col w-screen md:w-2/6 md:h-full md:border-black md:border-r">
            <div>
            <h2 className="text-7xl pt-4 pl-1 mt-2 mb-3 mx-8" id={SidebarStyle.largeText}>Tyler<br/>Zwiep</h2>
            <ContactButtons />
            <div className="ml-3 mt-3 mb-2">
            <p className={SidebarStyle.diamond}>⬥</p><p className={SidebarStyle.diamond}>⬥</p> <p className={SidebarStyle.diamond}>⬥</p><p className={SidebarStyle.diamond}>⬥</p>
            </div>
            <p  className="mx-6 mt-1 hidden md:flex" id={SidebarStyle.bioText_Bold}>Tyler is a developer based in Collingwood, Ontario.</p>
            <p className="mx-6 font-light hidden md:flex" id={SidebarStyle.bioText}> I am a multi-disciplinary creative professional with a keen eye for design, photography, and digital media creation. 
            With my extensive background in computer programming and development, I am able to seamlessly blend my artistic skills with my 
            technical expertise to produce visually stunning and highly functional digital experiences.
                </p>
                
             </div>
            
             <div className=" flex-shrink md:mt-4 lg:mt-12 xl:mt:-8 md:border-black md:border-t">
            <Portrait />
             </div>
             </div>
             <p  className="md:hidden w-screen mt-1" id={SidebarStyle.bioText_Bold}>Tyler is a developer based in Collingwood, Ontario.</p>
            <p className="md:hidden w-screen font-light" id={SidebarStyle.bioText}> Combining his passion for design, photography, and digital media creation with computer programming
                    and development –
                    Tyler loves to create websites, GUIs, and user interfaces that are both aesthetically pleasing
                    and technically proficient!
                </p>
       </>

    )
}

 export default Sidebar