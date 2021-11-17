import * as React from "react"
import NavLinks from "../components/navLinks"



// styles
const pageStyles = {
  color: "#232129",
  paddingLeft: "5vw",
  paddingTop: "3vh",
  marginTop: "1rem",
  screenLeft: "33.33%",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxwidth: "66.66%",
  marginLeft: "33.33%",
  backgroundColor: "#ececec"
}

// markup
const ContactPage = ( ) => {
  return (
    <main style={pageStyles} className="mx-8">
      <title>Contact</title>
      <NavLinks/>
      <h1 className="text-9xl mb-16">Contact</h1>
      
      <form  action="https://formspree.io/f/mqkwrdrj" method="POST">
      <label className="my-8 text-lg">
          Name
          <input type="text" name="name" className="w-full rounded py-1 mb-4 border bg-white" />
        </label>
        <br/>
        <label className="my-8 text-lg">
          Email
          <input type="email" name="_replyto" className="w-full rounded py-1 mb-4 border bg-white"/>
        </label>
        <br/>
        <label className="my-8 text-lg">
          Message
          <textarea type="textarea" rows="4" name="message" className="w-full rounded py-1 mb-4 border bg-white"/>
        </label>
        <input type="text" name="_gotcha" className="hidden" />
        <button type="submit" className="rounded bg-black text-white w-full py-2">Submit</button>
      </form>
    </main>
  )
}

export default ContactPage