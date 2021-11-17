import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import NavLinks from "../components/navLinks"
import { graphql } from "gatsby"
import Work from "../components/Work"
import Education from "../components/Education"



// styles
const pageStyles = {
  color: "#232129",
  paddingLeft: "5vw",
  paddingTop: "3vh",
  marginTop: "1rem",
  screenLeft: "33.33%",
  maxwidth: "66.66%",
  marginLeft: "33.33%",
  backgroundColor: "#ececec"
}


// markup
const IndexPage = ( {data} ) => {
  return (
  
    <main style={pageStyles} className="mx-8">
      <title>Tyler Zwiep</title>
      <NavLinks/>
      <h1 className="text-9xl mb-16">Technology</h1>
      <div className="grid grid-cols-5 gap-2 gap-y-8 justify-center">
      {data.allFile.edges.map((item, index) => {
               
        return <div key={index} className="mx-8 text-center">
          <GatsbyImage className="mx-auto mb-2" image={item.node.childImageSharp.gatsbyImageData} alt={item.node.base.split('.png')[0]} />
          {data.allTechnologiesJson.edges.map(jsonData =>{
            if (jsonData.node.image.includes(item.node.base))
            return <p>{jsonData.node.title}</p>
          })}
       </div>
        
       })}

    </div>
    <h1 className="text-9xl mt-16 mb-8">Work</h1>
     <Work />

    <h1 className="text-9xl mt-16 mb-8">Education</h1>
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
