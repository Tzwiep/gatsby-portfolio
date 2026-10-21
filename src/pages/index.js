import * as React from "react"
import NavLinks from "../components/navLinks"
import Work from "../components/Work"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Seo from "../components/Seo"
import "../styles/index.css"


// markup
const IndexPage = () => {
  return (
    <main className="mx-8 pb-8 page">

      <NavLinks />

      <h1 className="titleText">Work</h1>
      <Work />

      <h1 className="titleText">Technology</h1>
      <Skills />

      <h1 className="titleText">Education</h1>
      <Education />
    </main>

  )
}

export default IndexPage

export const Head = () => (
  <Seo
    title="Tyler Zwiep — Web Developer"
    description="Tyler Zwiep is a web developer in Collingwood, Ontario who takes ownership of websites from planning through launch and support: WordPress, ecommerce, design, analytics, hosting, and AI-assisted development."
  />
)
