import * as React from "react"
import { Helmet } from "react-helmet"
import NavLinks from "../components/navLinks"
import "../styles/contact.css"

// styles

const titleText = {
  fontSize: "10vw",
  marginTop: "1rem"
}

// markup
const ContactPage = () => {
  return (
    <main className="mx-8 page">
      <Helmet>
        <title>Tyler Zwiep | Contact</title>
      </Helmet>
      <NavLinks />
      <h1 style={titleText}>Contact</h1>
      <div className="px-4 md:px-16 mx-auto">
        <form action="https://www.flexyform.com/f/6fc6223a49eebe5ac338bdeeea602220be0fadf5" method="POST">
          <label className="my-8 text-lg">
            Name
            <input type="text" name="name" className="w-full rounded py-1 px-1 mb-4 border bg-white text-md" />
          </label>
          <br />
          <label className="my-8 text-lg">
            Email
            <input type="email" name="_replyto" className="w-full rounded py-1 mb-4 border bg-white" />
          </label>
          <br />
          <label className="my-8 text-lg">
            Message
            <textarea type="textarea" rows="4" name="message" className="w-full rounded py-1 mb-4 border bg-white" />
          </label>
          <input type="text" name="_gotcha" className="hidden" />
          <button type="submit" className="rounded bg-black text-white w-full py-2">Submit</button>
        </form>
      </div>
    </main>
  )
}

export default ContactPage