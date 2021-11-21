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
        }
      }
    }
  `)
    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <link rel="stylesheet" href="https://use.typekit.net/vzd4qeo.css" />
                <meta name="icon" href="../images/tz-logo.png" />
            </Helmet>
            <div className="fixed w-full z-50 top-0" style={{ fontFamily: "aktiv-grotesk, sans-serif", fontWeight: "400", backgroundColor: " #ececec" }}>
                <Header />
            </div>
            <Sidebar />
            <div style={{ fontFamily: "aktiv-grotesk, sans-serif", fontWeight: "400", backgroundColor: " #ececec" }}>
                {children}
            </div>
        </>
    )
}