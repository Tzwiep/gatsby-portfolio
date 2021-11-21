import React from 'react'
import EducationCard from './EducationCard'

 const Education = () => {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 mb-4">
            <EducationCard 
            school="Georgian College"
            title="Diploma, Computer Programmer"
            year="2019-2021"
            location="Collingwood, Ontario"
             />
       
             <EducationCard 
            school="University of Waterloo"
            title="Bachelor of Arts, Psychology"
            year="2006-2011"
             location="Waterloo, Ontario"
            />
        </div>

    )
}

 export default Education