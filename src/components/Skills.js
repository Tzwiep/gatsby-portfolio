import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import sassLogo from "../images/tech/sass.svg"
import gitLogo from "../images/tech/git.svg"
import githubLogo from "../images/tech/github.svg"
import wooLogo from "../images/tech/woocommerce.svg"
import cloudflareLogo from "../images/tech/cloudflare.svg"
import netlifyLogo from "../images/tech/netlify.svg"
import vercelLogo from "../images/icons/logo-vercel.svg"
import linuxLogo from "../images/tech/linux.svg"
import ga4Logo from "../images/tech/ga4.svg"
import gtmLogo from "../images/tech/gtm.svg"
import lookerLogo from "../images/tech/looker-studio.svg"
import claudeLogo from "../images/tech/claude.svg"
import codexLogo from "../images/tech/codex.svg"
import terminalLogo from "../images/tech/terminal.svg"
import astroLogo from "../images/tech/astro.svg"
import nextLogo from "../images/tech/nextjs.svg"

// Logo tile. StaticImage props must be literal, so each logo is written out below.
const Tile = ({ label, children, invert = false }) => (
  <div className="flex flex-col my-2 mx-2 md:my-0 md:mx-6 text-center flex-initial w-20">
    <div className={`mx-auto mb-2 h-12 flex items-end justify-center ${invert ? "dark:invert" : ""}`}>{children}</div>
    <p className="font-light text-sm leading-tight">{label}</p>
  </div>
)

const tabClass = (active) =>
  "border border-black px-4 py-1 min-w-full md:min-w-0 dark:border-off-white " +
  (active ? "bg-black text-white dark:bg-off-white dark:text-dark-theme" : "")

const Skills = () => {
  const [showNow, setShowNow] = useState(false)

  return (
    <div className="mx-4 mb-8">
      <div className="grid grid-cols-2 md:inline-grid md:grid-cols-2 mb-8" role="group" aria-label="Choose which list to show">
        <button type="button" className={tabClass(!showNow)} aria-pressed={!showNow} onClick={() => setShowNow(false)}>
          Foundations
        </button>
        <button type="button" className={tabClass(showNow) + " border-l-0"} aria-pressed={showNow} onClick={() => setShowNow(true)}>
          Now
        </button>
      </div>

      {showNow ? (
        <div className="mb-8">
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-6 mb-6 items-end">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 h-16 flex items-end"><img src={claudeLogo} alt="" width={64} height={64} /></div>
              <p className="text-2xl md:text-4xl font-bold">Claude</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 h-16 flex items-end dark:invert"><img src={codexLogo} alt="" width={64} height={64} /></div>
              <p className="text-2xl md:text-4xl font-bold">Codex</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 h-16 flex items-end"><img src={terminalLogo} alt="" width={64} height={64} /></div>
              <p className="text-2xl md:text-4xl font-bold">Terminal</p>
            </div>
          </div>
          <p className="font-light">The fundamentals are still doing some work.</p>
        </div>
      ) : (
        <div className="mb-8">
          <div className="flex flex-row flex-wrap place-content-evenly md:justify-start gap-y-6 mb-6 items-end">
            <Tile label="HTML"><StaticImage src="../images/tech/HTML.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="CSS"><StaticImage src="../images/tech/CSS.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="JavaScript"><StaticImage src="../images/tech/JavaScript.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="PHP"><StaticImage src="../images/tech/PHP.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="SQL"><StaticImage src="../images/tech/MySQL.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="WordPress" invert><StaticImage src="../images/tech/Wordpress.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="Shopify"><StaticImage src="../images/tech/Shopify.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="React"><StaticImage src="../images/tech/react.png" alt="" width={48} layout="fixed" placeholder="none" /></Tile>
            <Tile label="Next.js" invert><img src={nextLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="Astro"><img src={astroLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="Sass"><img src={sassLogo} alt="" width={48} height={48} /></Tile>
            <Tile label="Git"><img src={gitLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="GitHub" invert><img src={githubLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="WooCommerce"><img src={wooLogo} alt="" width={48} height={48} /></Tile>
            <Tile label="Cloudflare"><img src={cloudflareLogo} alt="" width={48} height={48} /></Tile>
            <Tile label="Netlify"><img src={netlifyLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="Vercel" invert><img src={vercelLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="Linux"><img src={linuxLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="GA4"><img src={ga4Logo} alt="" width={44} height={44} /></Tile>
            <Tile label="Tag Manager"><img src={gtmLogo} alt="" width={44} height={44} /></Tile>
            <Tile label="Looker Studio"><img src={lookerLogo} alt="" width={44} height={44} /></Tile>
          </div>
          <p className="font-light max-w-prose text-sm">
            <span className="font-bold">Also:</span> ACF Pro, Gravity Forms, DNS, hosting, SSL, migrations, performance, security,
            accessibility, REST APIs, command line / SSH.
          </p>
        </div>
      )}

      <p className="font-light max-w-prose">
        I use AI heavily in my day-to-day development: implementation, debugging, research, refactoring, repetitive
        tasks, and quick prototypes. Tools like Claude and Codex are part of how I work, not a secret. The practical
        effect is that more of my time goes to architecture, UX, testing, problem solving, project decisions, and what
        the client actually needs. If that's how your team works, or you'd like it to be, we'll get along.
      </p>
    </div>
  )
}

export default Skills
