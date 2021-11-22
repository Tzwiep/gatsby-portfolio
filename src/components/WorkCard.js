import React from "react"
import * as Style from "./WorkCard.module.css"

export default function WorkCard(props) {
    return (

        <div className="mx-4">
            <h2 className="font-bold text-2xl pb-2">{props.work}</h2>
            <div className={Style.work_grid}>
                <span className="font-bold">title</span>
                <span className="font-light">{props.role}</span>
                <span className="font-bold">year</span>
                <span className="font-light">{props.year}</span>
                <span className="font-bold"> {props.online === 'true' ? 'http://' : 'location'}
                </span>
                <span className="font-light">
                    {props.online === 'true'
                        ? <a className="underline hover:no-underline hover:bg-highlight py-1 pr-1" href={"https://www." + props.location} target="_blank" rel="noreferrer">
                            {props.location}
                        </a>
                        : <>{props.location}</>}</span>
                <span className="font-bold">work</span>
                <span className="font-light">{props.duty}</span>
            </div>
        </div>

    )

}
