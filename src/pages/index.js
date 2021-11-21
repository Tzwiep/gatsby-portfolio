import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import NavLinks from "../components/navLinks"
import { graphql } from "gatsby"
import Work from "../components/Work"
import Education from "../components/Education"
import { Helmet } from 'react-helmet';


// styles
const pageStyles = {
  backgroundColor: "#ececec",
  paddingLeft: "1.5vw",

  paddingTop: "3vh",
  marginTop: "1rem",
  screenLeft: "33.33%",
  maxwidth: "66.66%",
  marginLeft: "33.33%",
  color: "#232129"
}

const titleText = {
  fontSize: "10vw",
  marginBottom: "1rem"
}


// markup
const IndexPage = ({ data }) => {
  return (

    <main style={pageStyles} className="mx-8 pb-8">
      <Helmet>
        <title>Tyler Zwiep</title>
      </Helmet>
      <NavLinks />
      <h1 style={titleText}>Technology</h1>
      <div className=" flex flex-row flex-wrap justify-center gap-2 gap-y-8 mb-4 px-2 items-baseline">
        {data.allFile.edges.map((item, index) => {
          return <div key={index} className="flex flex-col mx-8 text-center flex-initial">
            <GatsbyImage className="mx-auto mb-2" image={item.node.childImageSharp.gatsbyImageData} alt={item.node.base.split('.png')[0]} />
            {data.allTechnologiesJson.edges.map(jsonData => {
              if (jsonData.node.image.includes(item.node.base))
                return <p className="font-light">{jsonData.node.title}</p>
            })}
          </div>

        })}
      </div>

      <h1 style={titleText}>Work</h1>
      <Work />

      <h1 style={titleText}>Education</h1>
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
