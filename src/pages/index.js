import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import NavLinks from "../components/navLinks"
import { graphql } from "gatsby"
import Work from "../components/Work"
import Education from "../components/Education"
import { Helmet } from 'react-helmet';
import "../styles/index.css"


// markup
const IndexPage = ({ data }) => {
  return (
    <main className="mx-8 pb-8 page">

      <Helmet>
        <title>Tyler Zwiep</title>
      </Helmet>

      <NavLinks />

      <h1 className="titleText">Technology</h1>
      <div className="flex flex-row flex-wrap place-content-evenly md:justify-center gap-3 px-4 md:px-2 md:gap-1 md:gap-y-8 mb-4 items-end">
        {data.allTechnologiesJson.edges.map(jsonData => {
          return <div key={jsonData.order} className="flex flex-col my-2 mx-2 md:my-0 md:mx-8 text-center flex-initial">
        {data.allFile.edges.map(item => {
  if (jsonData.node.image.includes(item.node.base)) {
    // Condition to check if the current item should have the dark:invert class
  
    const shouldInvert = ['WordPress', 'Squarespace', 'Node.js', 'NoSQL'].includes(jsonData.node.title);

    return (
      <>
        <GatsbyImage 
          className={`mx-auto mb-2 ${shouldInvert ? 'dark:invert' : ''}`} 
          image={item.node.childImageSharp.gatsbyImageData} 
          alt={jsonData.node.title} 
        />
        <p className="font-light">{jsonData.node.title}</p>
      </>
    );
  } else {
    return null;
  }
})}
          </div>
        })}
      </div>

      <h1 className="titleText">Work</h1>
      <Work />

      <h1 className="titleText">Education</h1>
      <Education />
    </main>

  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
      allFile(filter: { relativeDirectory: {eq: "tech"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 50)
            }
            base
          }
        }
     }
     allTechnologiesJson(sort: {fields: order}) {
      edges {
        node {
          title
          order
          image
        }
      }
    }
  }
`
