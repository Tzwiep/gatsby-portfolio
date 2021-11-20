
import React from "react"
import * as contactButtonsStyle from "./contactButtons.module.css"

export default function ContactButtons() {
  return (
      <div className="mb-2">
    <a className={contactButtonsStyle.email_Btn} href="mailto:tyler.zwiep@gmail.com">email</a>
    <a className={contactButtonsStyle.github_Btn} href="https://github.com/Tzwiep" target="_blank" rel="noreferrer">github</a>
    </div>
  )
}