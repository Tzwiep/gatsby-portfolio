import React from "react"

export default function EducationCard(props) {
  return (
    
     <div className="grid grid-col-3 px-4">
     <h2 className="font-bold text-2xl col-span-3 pb-2">{props.school}</h2>
     <div className="font-bold p-1 border-t border-black">title</div>
     <div className="font-light p-1 col-start-2 col-span-2 border-t border-black">{props.title}</div>
     <div className="font-bold p-1 border-t border-black">year</div>
     <div className="font-light p-1 col-start-2 col-span-2 border-t border-black">{props.year}</div>
     <div className="font-bold p-1 border-t border-b border-black">location</div>
     <div className="font-light p-1 col-start-2 col-span-2 border-t border-b border-black">{props.location}</div>


</div>

  )
}