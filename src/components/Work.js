import React from 'react'
import WorkCard from './WorkCard'

 const Work = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 gap-y-16 xl:gap-4 mb-8 ">
             <WorkCard
                work="Interkom"
                role="Web Developer"
                year="2021 - Present"
                online="true"
                location="interkom.ca"
                duty="As a Web Developer and Designer, I utilize a wide range of technologies to design and develop visually appealing, 
                responsive websites. I work with HTML, CSS, JavaScript, and various other tools and frameworks to create intuitive interfaces 
                and seamless user experiences. I collaborate closely with clients to ensure that the websites meet their specific requirements, 
                and integrate with content management systems like WordPress to provide easy content management for clients. 
                Following industry best practices, I optimize websites for performance, accessibility, and search engine visibility. 
                I continuously stay updated on the latest trends and advancements in web development to deliver high-quality, modern websites."
            />
            <WorkCard
                work="Caleidoscope"
                role="Design + Development"
                year="2016 - 2021"
                online="true"
                location="caleidoscopecreative.com"
                duty="Responsible for creating visually stunning and user-friendly websites using Squarespace, 
                leveraging my expertise in custom CSS and JavaScript. Additionally, I excelled in digital media 
                creation and photography, capturing compelling visuals that effectively showcased products and 
                enhanced brand representation. With a keen eye for detail and strong project management abilities, 
                I successfully managed regular site uploads, maintenance, and the execution of impactful digital media projects."
            />
             
        
         </div>   
    )
}

 export default Work