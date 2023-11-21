import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import ThemeToggle from "./themeToggle"

 const Header = () => {
    return (
        <header className="text-black-900 pt-1 pb-1 pr-4 text-right align-middle border-black border-b z-50" >
          <ThemeToggle/>
        <StaticImage src="../images/tz-logo.png" alt="TZ logo" className="w-6 my-1" />
        </header>
    )
}

 export default Header