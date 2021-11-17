import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import NavLinks from "../components/navLinks"



// styles
const pageStyles = {
  color: "#232129",
  paddingLeft: "5vw",
  paddingTop: "3vh",
  marginTop: "1rem",
  screenLeft: "33.33%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxwidth: "66.66%",
  marginLeft: "33.33%",
  backgroundColor: "#ececec"
}

// markup
const ProjectsPage = ( ) => {
  return (
 
    <main style={pageStyles} className="mx-8">
      <title>Projects</title>
      <NavLinks/>
      <h1 className="text-9xl mb-16">Projects</h1>

    </main>
  
  )
}

export default ProjectsPage