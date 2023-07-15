import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavLinks from "../components/navLinks"
import "../styles/projects.css"
import { Helmet } from "react-helmet"
import Fade from 'react-reveal/Fade';

// styles
const vagusStyle = {
    maxWidth: "550px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
}
const babyStepsStyle = {
    maxWidth: "750px",
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

        <main className="mx-8 page">
            <Helmet>
                <title>Tyler Zwiep | Projects</title>
            </Helmet>
            <NavLinks />
            <h1 className="titleText">Projects</h1>

            <div className="flex-col">
            <Fade>
                <StaticImage src="../images/projects/babyStepsScreens-lg.png" alt="BabySteps App Screens on iPhone" id="babyStepsStyle" style={babyStepsStyle} />
                </Fade>
                <div className="justify-content-start align-items-center gap-4 md:inline-flex mt-4">
                    <p className="font-bold leading-snug ml-2 md:ml-0">BabySteps - iOS App<br /><span className="font-light pb-2 md:pb-0 md:border-b-0">Baby Milestone Scrapbook App</span></p>
                    <div className="border-black mt-4 md:mt-0 md:border-l md:inline-flex mb-4">
                        <a className="link_btn" href="https://github.com/Tzwiep/BabySteps" target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-4">
            <Fade>
                <StaticImage src="../images/projects/vagus-oil.png" alt="Thght Snctry Vagus Massage Oil" className="vagusStyle" style={vagusStyle} />
                </Fade>
                <div className="justify-content-start align-items-center gap-4 md:inline-flex mt-6">
                    <p className="font-bold leading-snug ml-2 md:ml-0">Thght Snctry - Product Images<br /><span className="font-light pb-2 md:pb-0 md:border-b-0">3D Renders Using Adobe Dimension</span></p>
                    <div className="border-black mt-4 md:mt-0 md:border-l md:inline-flex mb-4">
                        <a className="link_btn" href="https://thghtsnctry.co/" target="_blank" rel="noreferrer">View on thghtsnctry.co</a>
                    </div>
                </div>
            </div>


            <div className="flex-col mt-14">
            <Fade>
                <StaticImage src="../images/projects/babySprinkle-lg.png" alt="Baby Sprinkle Website" style={laptopImageStyle} />
                </Fade>
                <div className="justify-content-start align-items-center gap-4 md:inline-flex">
                    <p className="font-bold leading-snug ml-2 md:ml-0">BabySprinkle - ASP.NET<br /><span className="font-light pb-2 md:pb-0 md:border-b-0">Virtual Baby Shower Web App</span></p>
                    <div className="border-black mt-4 md:mt-0 md:border-l md:inline-flex mb-4">
                        <a className="link_btn" href="https://github.com/Tzwiep/BabySprinkle" target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-1">
                <div className="inline-flex justify-center">
                <Fade>
                    <StaticImage src="../images/projects/dictionary.png" alt="Java Dictionary App" className="dictionary" />
                    <StaticImage src="../images/projects/dictionaryResult.png" alt="Java Dictionary App  Word Details" className="dictionary" />
                    </Fade>
                </div>
                <div className="justify-content-start align-items-center gap-4 md:inline-flex">
                    <p className="font-bold leading-snug ml-2 md:ml-0">Dictionary App - Java<br /><span className="font-light pb-2 md:pb-0 md:border-b-0">Dictionary Application Using the WordsAPI</span></p>
                    <div className="border-black mt-4 md:mt-0 md:border-l md:inline-flex mb-4">
                        <a className="link_btn" href="https://github.com/Tzwiep/DictionaryApp" target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-14">
            <Fade>
                <StaticImage src="../images/projects/BabyMilestones.png" alt="Baby Milestones App on Macbook" style={laptopImageStyle} />
                </Fade>
                <div className="justify-content-start align-items-center gap-4 md:inline-flex">
                    <p className="font-bold leading-snug ml-2 md:ml-0">Baby Milestones - Node.js, Express, Handlebars, and MongoDB<br /><span className="font-light pb-2 md:pb-0 md:border-b-0">CRUD Web Application</span></p>
                    <div className="border-black mt-4 md:mt-0 md:border-l md:inline-flex mb-4">
                        <a className="link_btn" href="https://github.com/Tzwiep/CRUD-Assignment2_COMP2068_st200428335" target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-14">
            <Fade>
                <StaticImage src="../images/projects/BDH.png" alt="Barrie Dental Hygiene Website on Macbook" style={laptopImageStyle} />
                </Fade>
                <div className="justify-content-start align-items-center gap-4 md:inline-flex">
                    <p className="font-bold leading-snug ml-2 md:ml-0">Barrie Dental Hygiene - Front End Design<br /><span className="font-light pb-2 md:pb-0 md:border-b-0">Custom Squarespace Website</span></p>
                    <div className="border-black mt-4 md:mt-0 md:border-l md:inline-flex mb-4">
                        <a className="link_btn" href="https://www.barriedentalhygiene.ca" target="_blank" rel="noreferrer">View Website</a>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-16 mb-8 text-center">
                <div className="border-t border-gray-300 w-4/5 mx-auto mb-16">
                <Fade bottom>
                    <div>
                    <StaticImage src="../images/tech/gatsby.png" alt="Gatsby Icon" className="tech_thumb" />
                    <StaticImage src="../images/tech/react.png" alt="React Icon" className="tech_thumb" />
                    <StaticImage src="../images/tech/tailwind.png" alt="Tailwind CSS Icon" className="tech_thumb" />
                    <StaticImage src="../images/icons/gatsbyCloud.png" alt="Gatsby Cloud Icon" className="tech_thumb" />
                    </div>
                    <p className="font-light mt-1 mb-6">This portfolio site was created using <b>Gatsby</b>, <b>React</b>, <b>Tailwind CSS</b>, and is deployed to the <b>Gatsby Cloud</b>.</p>
                    <a className="link_btn" href="https://github.com/Tzwiep/gatsby-portfolio" target="_blank" rel="noreferrer">View on GitHub</a>
                    </Fade>
                </div> 
            </div>

        </main>

    )
}

export default ProjectsPage