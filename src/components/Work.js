import React from 'react'
import WorkCard from './WorkCard'

 const Work = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-4 mb-8 ">
             <WorkCard
                work="Interkom"
                role="Web Developer"
                year="2021 - Present"
                online="true"
                location="interkom.ca"
                duty="Responsible for various web development projects, 
                including buidling client websites, performing web content updates, and performing regular site maintenance"
            />
            <WorkCard
                work="Caleidoscope"
                role="Web Design + Development"
                year="2016 - 2021"
                online="true"
                location="caleidoscopecreative.com"
                duty="Responsible for various web design and development projects, 
                including regular site uploads and maintenance,
                 as well digital media creation and photography projects."
            />
              <WorkCard
                work="Region of Peel"
                role="Labourer"
                year="2011 - 2019"
                online="false"
                location="Mississauga, Ontario"
                duty="Responsible for day-to-day operations of CRC. Provided public support, 
                working quickly and accurately in a fast paced environment 
                while maintaining positive relationships with staff and patrons. "
            />
         </div>   
    )
}

 export default Work