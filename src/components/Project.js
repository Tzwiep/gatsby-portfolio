import React from "react"
import { Fade } from "react-awesome-reveal"

// One featured project on the Projects page. `image` is a <StaticImage> element
// (StaticImage props have to be literal at the call site, so it's passed in ready-made).
export default function Project({ title, category, url, linkLabel = "View website", role, attribution, tags = [], image, children }) {
  return (
    <div className="flex-col mt-16">
      <Fade>
        <div className="site_shot border border-black dark:border-off-white">{image}</div>
      </Fade>
      <div className="justify-content-start align-items-center gap-4 md:inline-flex mt-4">
        <p className="font-bold leading-snug ml-2 md:ml-0">
          {title}
          <br />
          <span className="font-light pb-2 md:pb-0 md:border-b-0">{category}</span>
        </p>
        <div className="border-black mt-4 md:mt-0 md:border-l md:inline-flex mb-4">
          <a className="link_btn" href={url} target="_blank" rel="noreferrer">{linkLabel}</a>
        </div>
      </div>
      <div className="ml-2 md:ml-0 max-w-prose">
        <p className="text-sm mb-3">
          <span className="font-bold">{role}</span>
          {attribution ? <span className="font-light"> · {attribution}</span> : null}
        </p>
        <div className="font-light mb-3 project_copy">{children}</div>
        {tags.length > 0 ? (
          <p className="text-sm font-light">{tags.join(" · ")}</p>
        ) : null}
      </div>
    </div>
  )
}
