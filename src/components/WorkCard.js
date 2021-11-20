
import React from "react"

const linkStyle= {

}


export default function WorkCard(props) {
    const isOnline = props.online
    return (
        <div className="inline-grid grid-col-4 px-4 align-center">
        <h2 className="font-bold text-2xl col-span-3 pb-2">{props.work}</h2>
        <div className="font-bold p-1 border-t border-black">title</div>
        <div className="font-light p-1 col-start-2 col-span-2 border-t border-black pl-6">{props.role}</div>
        <div className="font-bold p-1 border-t border-black">year</div>
        <div className="font-light p-1 col-start-2 col-span-2 border-t border-black pl-6">{props.year}</div>
        <div className="font-bold p-1 border-t border-black">
        {props.online === 'true' ? 'http://' : 'location'}
        </div>
        <div className="font-light p-1 col-start-2 col-span-2 border-t border-black pl-6">
        {props.online === 'true' ? <a className="text-blue-500 underline"href={"https://www."+ props.location}>{props.location}</a> :  <>{props.location}</>}
            </div>
        <div className="font-bold p-1 border-t border-b border-black h-70">work</div>
        <div className="font-light p-1 col-start-2 col-span-2 border-t border-b border-black pl-6 h-70">{props.duty}</div>
        </div>
    )
}
