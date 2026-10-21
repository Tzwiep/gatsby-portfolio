import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "./layout.css"

export default function Layout({ children }) {
    return (
        <>
            <div className="fixed w-screen z-50 top-0 header">
                <Header />
            </div>
            <Sidebar />
            <div className="site">
                {children}
            </div>
        </>
    )
}
