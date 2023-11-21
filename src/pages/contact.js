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
          <label className="text-lg">
            Name
            <input type="text" name="name" className="w-full rounded p-2 px-1 mb-4 mt-1 border bg-white dark:bg-transparent dark:border-indigo-500 dark:border-2 text-md" />
          </label>
          <br />
          <label className="text-lg">
            Email
            <input type="email" name="_replyto" className="w-full rounded p-2 mb-4 mt-1 border bg-white dark:bg-transparent dark:border-2 dark:border-indigo-500" />
          </label>
          <br />
          <label className="text-lg">
            Message
            <textarea type="textarea" rows="4" name="message" className="w-full rounded p-2 mb-4 mt-1 border bg-white dark:bg-transparent dark:border-2 dark:border-indigo-500" />
          </label>
          <input type="text" name="_gotcha" className="hidden" />
          <button type="submit" className="rounded bg-black text-white w-full py-2 dark:bg-indigo-500">Submit</button>
        </form>
      </div>
      <div className="px-4 h-64 md:px-16 mx-auto">
        <p></p>
        <p></p>
        </div>
    </main>
  )
}

export default ContactPage