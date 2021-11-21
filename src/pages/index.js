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
      <div className="flex flex-row flex-wrap justify-center gap-1 gap-y-8 mb-4 px-2 items-end">
        {data.allTechnologiesJson.edges.map(jsonData => {
          return <div key={jsonData.order} className="flex flex-col mx-8 text-center flex-initial">
            {data.allFile.edges.map(item => {
              if (jsonData.node.image.includes(item.node.base))
                return <>
                  <GatsbyImage className="mx-auto mb-2" image={item.node.childImageSharp.gatsbyImageData} alt={jsonData.node.title} />
                  <p className="font-light">{jsonData.node.title}</p>
                </>
              else
                return null
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
