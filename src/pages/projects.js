import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavLinks from "../components/navLinks"
import "../styles/projects.css"
import { Helmet } from "react-helmet"

// styles
const pageStyles = {
    color: "#232129",
    paddingLeft: "1.5vw",
    paddingTop: "3vh",
    marginTop: "1rem",
    screenLeft: "33.33%",
    maxwidth: "66.66%",
    marginLeft: "33.33%",
    backgroundColor: "#ececec"
}
const titleText = {
    fontSize: "10vw",
    marginBottom: "1rem"
}
const vagusStyle = {
    maxWidth: "33.33vw",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
}
const babyStepsStyle = {
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
}
const laptopImageStyle = {
    maxWidth: "750px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    marginTop: "3rem",
    marginBottom: "3rem"
}



// markup
const ProjectsPage = () => {
    return (

        <main style={pageStyles} className="mx-8">
            <Helmet>
                <title>Tyler Zwiep | Projects</title>
            </Helmet>
            <NavLinks />
            <h1 style={titleText}>Projects</h1>

            <div className="flex-col">
                <StaticImage src="../images/projects/babyStepsScreens-lg.png" alt="BabySteps App Screens on iPhone" style={babyStepsStyle} />
                <div className="d-flex justify-content-start align-items-center gap-4 inline-flex">
                    <p className="font-bold leading-snug">BabySteps - iOS App<br /><span className="font-light">Baby Milestone Scrapbook App</span></p>
                    <div className="border-black border-l inline-flex mb-4">
                        <a className="link_btn" href="https://github.com/Tzwiep/BabySteps" target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-4">
                <StaticImage src="../images/projects/vagus-oil.png" alt="Thght Snctry Vagus Massage Oil" style={vagusStyle} />
                <div className="d-flex justify-content-start align-items-center gap-4 inline-flex mt-4">
                    <p className="font-bold leading-snug">Thght Snctry - Product Images<br /><span className="font-light">3D Renders Using Adobe Dimension</span></p>
                    <div className="border-black border-l inline-flex mb-4">
                        <a className="link_btn" href="https://goop.com/ca-en/thought-sanctuary-vagus-nerve-oil/p/?variant_id=82951" target="_blank" rel="noreferrer">View on Goop.com</a>
                    </div>
                </div>
            </div>


            <div className="flex-col mt-14">
                <StaticImage src="../images/projects/babySprinkle-lg.png" alt="Baby Sprinkle Website" style={laptopImageStyle} />
                <div className="d-flex justify-content-start align-items-center gap-4 inline-flex">
                    <p className="font-bold leading-snug">BabySprinkle - ASP.NET<br /><span className="font-light">Virtual Baby Shower Web App</span></p>
                    <div className="border-black border-l inline-flex mb-4">
                        <a className="link_btn" href="https://github.com/Tzwiep/BabySprinkle" target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-14">
                <div className="inline-flex justify-center">
                    <StaticImage src="../images/projects/dictionary.png" alt="Java Dictionary App" className="dictionary" />
                    <StaticImage src="../images/projects/dictionaryResult.png" alt="Java Dictionary App  Word Details" className="dictionary" />
                </div>
                <div className="d-flex justify-content-start align-items-center gap-4 inline-flex">
                    <p className="font-bold leading-snug">Dictionary App - Java<br /><span className="font-light">Dictionary Application Using the WordsAPI</span></p>
                    <div className="border-black border-l inline-flex mb-4">
                        <a className="link_btn" href="https://github.com/Tzwiep/DictionaryApp" target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-14">
                <StaticImage src="../images/projects/BabyMilestones.png" alt="Baby Milestones App on Macbook" style={laptopImageStyle} />
                <div className="d-flex justify-content-start align-items-center gap-4 inline-flex">
                    <p className="font-bold leading-snug">Baby Milestones - Node.js, Express, Handlebars, and MongoDB<br /><span className="font-light">CRUD Web Application</span></p>
                    <div className="border-black border-l inline-flex mb-4">
                        <a className="link_btn" href="https://baby-milestone.herokuapp.com/" target="_blank" rel="noreferrer">View Website</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-14">
                <StaticImage src="../images/projects/BDH.png" alt="Barrie Dental Hygiene Website on Macbook" style={laptopImageStyle} />
                <div className="d-flex justify-content-start align-items-center gap-4 inline-flex">
                    <p className="font-bold leading-snug">Barrie Dental Hygiene - Front End Design<br /><span className="font-light">Custom Squarespace Website</span></p>
                    <div className="border-black border-l inline-flex mb-4">
                        <a className="link_btn" href="https://www.barriedentalhygiene.ca" target="_blank" rel="noreferrer">View Website</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-16 mb-8 text-center">
                <div className="border-t border-gray-300 w-4/5 mx-auto mb-16">
                    <div>
                    <StaticImage src="../images/tech/gatsby.png" alt="Gatsby Icon" className="tech_thumb" />
                    <StaticImage src="../images/tech/react.png" alt="React Icon" className="tech_thumb" />
                    <StaticImage src="../images/tech/tailwind.png" alt="Tailwind CSS Icon" className="tech_thumb" />
                    <StaticImage src="../images/icons/gatsbyCloud.png" alt="Gatsby Cloud Icon" className="tech_thumb" />
                    </div>
                    <p className="font-light mt-1 mb-6">This portfolio site was created using <b>Gatsby</b>, <b>React</b>, <b>Tailwind CSS</b>, and is deployed to the <b>Gatsby Cloud</b>.</p>
                    <a className="link_btn" href="#" target="_blank" rel="noreferrer">View on GitHub</a>
                </div>
            </div>

        </main>

    )
}

export default ProjectsPage