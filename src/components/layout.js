import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "./layout.css"

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
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
            <Helmet>
                <html lang="en" />
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
                <link rel="stylesheet" href="https://use.typekit.net/vzd4qeo.css" media="screen"  />
                <meta name="icon" href="../images/tz-logo.png" />
            </Helmet>
            <div className="fixed w-screen z-50 top-0 header">
                <Header />
            </div>
            <Sidebar />
            <div class="site">
                {children}
            </div>
        </>
    )
}