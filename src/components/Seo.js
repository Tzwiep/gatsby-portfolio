import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Rendered via each page's `Head` export (Gatsby Head API).
export default function Seo({ title, description, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <html lang="en" />
      <title>{title || site.siteMetadata.title}</title>
      <meta name="description" content={description || site.siteMetadata.description} />
      <link rel="stylesheet" href="https://use.typekit.net/vzd4qeo.css" media="screen" />
      {children}
    </>
  )
}
